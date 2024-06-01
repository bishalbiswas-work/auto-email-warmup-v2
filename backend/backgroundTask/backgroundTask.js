const admin = require("../db/dbSetup");
const db = admin.firestore();

const stripe = require("stripe")(
  "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"
); // Replace with your Stripe secret key

const userCollectionName = "userCollectiontest";
// const userCollectionName = "userCollection2";

const dailEmailCount = 5;
const renewCreditsCount = 150;
const priceId = "price_1OO25SJCMgay6huUfBJf0J3U";
const { sendEmailIndividually } = require("./emailSender");

async function backgroundTask() {
  console.log("Running background task...");
  try {
    const userCollectionRef = db.collection(userCollectionName);
    const today = new Date().toISOString().slice(0, 10); // Format: 'YYYY-MM-DD'
    const snapshot = await userCollectionRef.get();
    if (!snapshot.empty) {
      for (const item of snapshot.docs) {
        const docId = item.id;
        var docData = item.data();
        // if (docData.paymentStatus !== "unpaid") {
        if (docData.paymentStatus) {
          const { email, warmupEmails } = docData;
          console.log(docData);

          // console.log("Warmup Email: ", warmupEmails);
          // console.log(docId);
          if (warmupEmails && warmupEmails.length >= 1) {
            console.log("Warmup Emails more than one start =====");
            // warmupEmails.forEach((warmupEmailItem) => async {
            //   // console.log("Email : ", warmupEmailItem);

            //   await handleEmailWarmupAndPayment(docId, email, warmupEmailItem);
            // });
            for (const warmupEmailItem of warmupEmails) {
              // console.log("Email : ", warmupEmailItem);

              // Ensure that each asynchronous operation completes before proceeding to the next one
              await handleEmailWarmupAndPayment(docId, email, warmupEmailItem);
            }
            console.log("Warmup Emails more than one end =====");
          } else {
            console.error(
              `backgroundTasks/backgroundTasks, there is not warmup email on the account : ${email} & docId ${docId}`
            );
          }
        }
      }
    } else {
      console.log(`There is no user in ${userCollectionName}`);
    }
  } catch (error) {
    console.error("backgroundTask/backgroundTask : ", error);
  }
}

async function handleEmailWarmupAndPayment(docId, email, warmupEmailItem) {
  const today = new Date().toISOString().slice(0, 10); // Format: 'YYYY-MM-DD'
  console.log("handleEmailWarmupAndPayment called", warmupEmailItem.email);
  let newCreditsAvailable;
  try {
    if (warmupEmailItem.creditsAvailable > 0) {
      if (warmupEmailItem.warmupStatus === "active") {
        if (warmupEmailItem.lastWarmup) {
          const { date, count } = warmupEmailItem.lastWarmup;
          if (date !== today || (date === today && count < dailEmailCount)) {
            // Warmup Email
            const newLastWarmup = {
              date: today,
              count: date === today ? count + 1 : 1,
            };
            newCreditsAvailable = warmupEmailItem.creditsAvailable - 1;
            if (newCreditsAvailable < 0) {
              newCreditsAvailable = 0;
            }

            warmupEmailItem.lastWarmup = newLastWarmup;
            warmupEmailItem.creditsAvailable = newCreditsAvailable;
            // await sendEmailIndividually(warmupEmailItem.email);
            await updateWarmupEmailDetails(docId, warmupEmailItem);
          } else {
            // Don't warmup email as done for today
            console.log(
              `backgroundTasks/handleEmailWarmupAndPayment Daily Warmup limit reached for user : ${email}  warmup email: ${warmupEmailItem.email}`
            );
          }
        } else {
          //
          newCreditsAvailable = warmupEmailItem.creditsAvailable - 1;
          if (newCreditsAvailable < 0) {
            newCreditsAvailable = 0;
          }

          warmupEmailItem.creditsAvailable = newCreditsAvailable;
          warmupEmailItem.lastWarmup = { date: today, count: 1 };

          await updateWarmupEmailDetails(docId, warmupEmailItem);
          // await sendEmailIndividually(warmupEmailItem.email);
        }
        console.log(
          `backgroundTasks/handleEmailWarmupAndPayment Warming Up Email : ${email}  warmup email: ${warmupEmailItem.email}`
        );
      } else if (warmupEmailItem.warmupStatus === "paused") {
      }
    } else {
      console.log(
        `backgroundTasks/handleEmailWarmupAndPayment credits are expired : ${email}  warmup email: ${warmupEmailItem.email}`
      );

      if (warmupEmailItem.warmupStatus === "active") {
        if (
          warmupEmailItem.subscription &&
          warmupEmailItem.subscription.subscriptionId
        ) {
          try {
            const subStatus = await getSubscriptionStatus(
              warmupEmailItem.subscription.subscriptionId
            );
            console.log("Sub : ", subStatus, typeof subStatus);
            if (subStatus === "active") {
              // Renew credits
              console.log(
                `Subscription is [active] renewing credits : Email: ${email} SubEmail: ${warmupEmailItem.email}`
              );

              await updateWarmupEmailDetails(docId, {
                lastWarmup: warmupEmailItem.lastWarmup ?? null,
                email: warmupEmailItem.email,
                creditsAvailable: renewCreditsCount,
                warmupStatus: warmupEmailItem.warmupStatus,
                subscription: warmupEmailItem.subscription ?? null,
              });
            } else if (
              subStatus === "canceled" ||
              subStatus === "incomplete_expired" ||
              subStatus === "unpaid"
            ) {
              // Pause the warmup
              console.log(
                `Subscription is [Canceled - Unpaid - Denied multiple times] Pausing warmup : Email: ${email} SubEmail: ${warmupEmailItem.email}`
              );
              await updateWarmupEmailDetails(docId, {
                lastWarmup: warmupEmailItem.lastWarmup ?? null,
                email: warmupEmailItem.email,
                creditsAvailable: warmupEmailItem.creditsAvailable,
                warmupStatus: "paused",
                subscription: warmupEmailItem.subscription ?? null,
              });
              // const temp = warmupEmailItem
              // await updateWarmupEmailDetails(docId,)
            } else if (subStatus === "invalid") {
              // Reinitate the subscription
              // const res = await addNewSubscription_v2(
              //   email,
              //   warmupEmailItem.email
              // );
              // if (
              //   res &&
              //   res.subscriptionStatus &&
              //   res.subscriptionStatus === "active"
              // ) {
              //   await updateWarmupEmailDetails(docId, {
              //     lastWarmup: warmupEmailItem.lastWarmup ?? null,
              //     email: warmupEmailItem.email,
              //     creditsAvailable: renewCreditsCount,
              //     warmupStatus: warmupEmailItem.warmupStatus,
              //     subscription: warmupEmailItem.subscription ?? null,
              //   });
              // }
              console.log(
                `Subscription is [invalid] re-initiate subscription: Email: ${email} SubEmail: ${warmupEmailItem.email}`
              );
            } else if (subStatus === "paused") {
              // re-activating subscription
              console.log(
                `Subscription is [paused] re-activating subscription as warmup status is still active ( code not written ): Email: ${email} SubEmail: ${warmupEmailItem.email}`
              );
              await updateWarmupEmailDetails(docId, {
                lastWarmup: warmupEmailItem.lastWarmup ?? null,
                email: warmupEmailItem.email,
                creditsAvailable: warmupEmailItem.creditsAvailable,
                warmupStatus: "paused",
                subscription: warmupEmailItem.subscription ?? null,
              });
            } else {
              console.log(
                `Payment on processing warmup status not changed and credits not renewed : ${email} SubEmail: ${warmupEmailItem.email}`
              );
            }
          } catch (error) {
            console.error(
              "backgroundTasks/handleEmailWarmupAndPayment subscription status Error: ",
              error
            );
          }
        } else {
          // Initate the subscription
          console.log(
            `Initiate subscription: Email: ${email} SubEmail: ${warmupEmailItem.email}`
          );

          // const res = await addNewSubscription_v2(
          //   email,
          //   warmupEmailItem.email
          // );
          // if (
          //   res &&
          //   res.subscriptionStatus &&
          //   res.subscriptionStatus === "active"
          // ) {
          //   await updateWarmupEmailDetails(docId, {
          //     lastWarmup: warmupEmailItem.lastWarmup ?? null,
          //     email: warmupEmailItem.email,
          //     creditsAvailable: renewCreditsCount,
          //     warmupStatus: warmupEmailItem.warmupStatus,
          //     subscription: warmupEmailItem.subscription ?? null,
          //   });
          // }
        }
      } else if (warmupEmailItem.warmupStatus === "paused") {
        console.log(
          `Warmup status is paused, pausing the subscription ( code not written ) : ${email} SubEmail: ${warmupEmailItem.email}`
        );
      }
    }
  } catch (error) {
    console.error("backgroundTasks/handleEmailWarmupAndPayment", error);
  }
}

async function updateWarmupEmailDetails(docId, warmupEmailNewData) {
  try {
    const usersRef = db.collection(userCollectionName);

    const docRef = usersRef.doc(docId);
    const doc = await docRef.get();
    const docData = doc.data();
    if (doc.exists) {
      // console.log("Document data:", docData);
      var warmupEmailsData = docData.warmupEmails;
      // console.log("Old: ", warmupEmailsData);

      for (let i = 0; i < docData.warmupEmails.length; i++) {
        const warmupEmailItem = docData.warmupEmails[i];

        if (warmupEmailItem.email === warmupEmailNewData.email) {
          console.log("Selected Email Item: ", warmupEmailItem);
          warmupEmailsData[i] = warmupEmailNewData;
          break; // Stop the loop if you only need the first match
        }
      }
      docRef.update({
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        warmupEmails: warmupEmailsData,
      });
      // ;
      // console.log("New: ", warmupEmailsData);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

async function addNewSubscription_v2(mainEmail, userEmail) {
  const detailsRef = db.collection("stripeUpgradeEmails");

  try {
    // Check for upgrade eligibility
    const snapshot = await detailsRef.where("subEmail", "==", userEmail).get();
    if (!snapshot.empty) {
      const currentTime = new Date().getTime();
      for (let doc of snapshot.docs) {
        const data = doc.data();
        const lastUpgradeTime = data.timestamp?.toMillis() ?? null;
        if (
          lastUpgradeTime &&
          currentTime - lastUpgradeTime < 24 * 60 * 60 * 1000
        ) {
          console.log(
            `Less than 24 hours since last upgrade attempt for ${userEmail}.`
          );
          return {
            message: "Upgrade attempt too soon.",
            subscriptionId: null,
            subscriptionStatus: null,
          };
        }
      }
    }

    // Ensure customer exists or create new one
    let { data } = await stripe.customers.list({ email: mainEmail, limit: 1 });
    let customer = data[0];
    if (!customer) {
      customer = await stripe.customers.create({ email: mainEmail });
      console.log(`New customer created with email: ${mainEmail}`);
    }

    // Create subscription
    const paymentMethods =
      await retrievePaymentMethodsForCustomerWithChargesByEmail(mainEmail);
    if (!paymentMethods || paymentMethods.length === 0) {
      throw new Error("No payment methods available for the customer");
    }

    const selectedPaymentMethod = selectThePaymentMethod(paymentMethods);
    if (!selectedPaymentMethod) {
      throw new Error("No suitable payment method found");
    }

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent"],
      default_payment_method: selectedPaymentMethod.paymentId,
    });

    await updateSubscriptionStatus(
      mainEmail,
      userEmail,
      subscription.id,
      subscription.status === "active" || subscription.status === "trialing"
        ? "active"
        : "incomplete"
    );
    console.log(
      `Subscription successfully created for ${userEmail} with status: ${subscription.status}`
    );

    // Log the upgrade attempt
    await detailsRef.add({
      mainEmail: mainEmail,
      subEmail: userEmail,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {
      subscriptionId: subscription.id,
      subscriptionStatus: subscription.status,
    };
  } catch (error) {
    console.error(
      `Failed to create subscription for ${userEmail}: ${error.message}`
    );
    return {
      message: error.message,
      subscriptionId: null,
      subscriptionStatus: null,
    };
  }
}
async function updateSubscriptionStatus(
  mainEmail,
  warmupEmail,
  subscriptionId,
  subscriptionStatus
) {
  if (!mainEmail || !warmupEmail || !subscriptionId || !subscriptionStatus) {
    console.log(
      "All parameters (mainEmail, warmupEmail, subscriptionId, subscriptionStatus) are required."
    );
    return { status: false, message: "Missing required parameters." };
  }

  const usersRef = db.collection(userCollectionName); // Replace 'userCollection' with the actual name of your user collection
  const snapshot = await usersRef.where("email", "==", mainEmail).get();

  if (snapshot.empty) {
    console.log("No user found with the main email provided.");
    return { status: false, message: "No user found." };
  }

  const userDoc = snapshot.docs[0];
  const warmupEmails = [...userDoc.data().warmupEmails]; // Copy the warmupEmails array

  const foundIndex = warmupEmails.findIndex(
    (item) => item.email === warmupEmail
  );
  if (foundIndex === -1) {
    console.log("Warmup email not found in the user's warmupEmails array.");
    return { status: false, message: "Warmup email not found." };
  }

  // Update or add subscription details
  warmupEmails[foundIndex].subscription = {
    subscriptionId: subscriptionId,
    subscriptionStatus: subscriptionStatus,
  };

  // Prepare the update object for Firestore
  const updateObject = {
    warmupEmails: warmupEmails,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(), // Update the updatedAt timestamp
  };

  await userDoc.ref.update(updateObject);
  console.log("Subscription updated successfully for the specified email.");
  return { status: true, message: "Subscription updated successfully." };
}

async function getSubscriptionStatus(subscriptionId) {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    console.log("Subscription Status:", subscription.status);
    return subscription.status;
  } catch (error) {
    console.error("Error fetching subscription:", error);
    // Check if the error code indicates that the subscription was not found
    if (error.code === "resource_missing") {
      // console.log("Subscription Status: invalid");
      return "invalid"; // Return "invalid" if the subscription does not exist
    }
    return null; // Return null for other types of errors
  }
}

// Example usage
// const subscriptionId = "sub_1PLwZqJCMgay6huUCZBaSN8Jxxx"; // Replace with your actual subscription ID
// getSubscriptionStatus(subscriptionId);

// backgroundTask();

// (async function () {
//   await sendEmailIndividually("bishalbiswas.work@gmail.com");
// })();
module.exports = { backgroundTask };
