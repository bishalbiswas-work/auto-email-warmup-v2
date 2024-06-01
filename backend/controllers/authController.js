const admin = require("../db/dbSetup");
const db = admin.firestore();
const path = require("path");
const fs = require("fs");

const axios = require("axios");
const qs = require("querystring");

const userCollectionName = "userCollectiontest";
const schemaPath = path.resolve(__dirname, "../db/schema/user.json");
const newUserCredits = 20; // Default credits for new users
const OauthFunctions = require("./OauthFunctions/OauthFunctions");
const emailSetupCollectionName = "emailSetupDetails";

const stripe = require("stripe")(
  "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"
); // Replace with your Stripe secret key

const getUserLogin = async (req, res) => {
  try {
    console.log("Login");
    const { email } = req.body;

    // Check if user exists in Firebase
    const userCollection = db.collection(userCollectionName);
    const snapshot = await userCollection.where("email", "==", email).get();

    if (snapshot.empty) {
      console.log("User does not exist in database");

      res.status(200).send({ status: false, message: "User Not Found" });
    } else {
      res.status(200).send({
        status: true,
        message: "User Found",
      });
      // try {
      //   const custsomers = await stripe.customers.list({
      //     email: email,
      //     limit: 1,
      //   });
      //   const listSubscriptions = await stripe.subscriptions.list({
      //     customer: custsomers.data[0].id,
      //     status: "all",
      //   });
      //   if (listSubscriptions.length > 0) {
      //     res.status(200).send({
      //       status: true,
      //       message: "User Found",
      //     });
      //   } else {
      //     res.status(200).send({
      //       status: false,
      //       message: "User Not Found",
      //     });
      //   }
      // } catch (error) {
      //   console.error("authController/getUserLogin stripe error: ", error);
      //   res.status(500).send({
      //     status: false,
      //     message: "Internal Server Error. Please try again later.",
      //   });
      // }
    }
  } catch (error) {
    console.error("authController/getUserLogin : ", error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const { email } = req.body;
    let schemaTemplate = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

    let userData = {};

    for (const key in schemaTemplate.properties) {
      if (
        schemaTemplate.properties[key].type === "array" &&
        key === "warmupEmails"
      ) {
        // Special handling for `warmupEmails`
        userData[key] = [
          {
            email: email, // Set the email from the provided email
            lastWarmup:
              schemaTemplate.properties[key].items.properties.lastWarmup
                .default || null,
            warmupStatus:
              schemaTemplate.properties[key].items.properties.warmupStatus
                .default || null,
            creditsAvailable: newUserCredits,
          },
        ];
      } else if (key === "createdAt" || key === "updatedAt") {
        // Use server timestamp for creation and update times
        userData[key] = admin.firestore.FieldValue.serverTimestamp();
      } else {
        // Use default values from the schema or null if not specified
        userData[key] = schemaTemplate.properties[key].default || null;
      }
    }
    userData.email = email; // Ensure the email is set to the provided userEmail
    userData.creditsAvailable = newUserCredits; // Set `creditsAvailable` to 100 by default for new users

    const usersRef = db.collection(userCollectionName);
    const snapshot = await usersRef.where("email", "==", email).get();

    if (snapshot.empty) {
      // No existing user found, create a new user
      const newUserRef = await usersRef.add(userData);
      console.log(`New user created with ID: ${newUserRef.id}`);
      res
        .status(200)
        .send({ status: true, userExists: false, userId: newUserRef.id }); // Return success status and new user ID
    } else {
      // User already exists
      const userId = snapshot.docs[0].id; // Assuming the first document is the existing user
      console.log("User already exists.");

      res.status(200).send({ status: false, userExists: true, userId: userId }); // Return existing user status and ID
    }
  } catch (error) {
    console.error("authController/createNewUser : ", error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

const addNewWarmUpEmail = async (req, res) => {
  try {
    const { mainEmail, newWarmupEmail } = req.body;

    let schemaTemplate = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
    const warmupEmailSchema =
      schemaTemplate.properties.warmupEmails.items.properties;

    // Find the user by their main email
    const usersRef = db.collection(userCollectionName);
    const snapshot = await usersRef.where("email", "==", mainEmail).get();

    if (snapshot.empty) {
      console.log("No existing user found.");
      res.status(200).send({ status: false, message: "User not found" });
    } else {
      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();

      // Check if newWarmupEmail already exists in warmupEmails
      const existingEmails = userData.warmupEmails || [];
      if (
        existingEmails.some((emailObj) => emailObj.email === newWarmupEmail)
      ) {
        console.log("Warmup email already exists.");
        res
          .status(200)
          .send({ status: false, message: "Warmup email already exists" });
      } else {
        // Prepare the new warmup email object
        const newWarmupEmailObj = {
          email: newWarmupEmail,
          lastWarmup: warmupEmailSchema.lastWarmup.default || null,
          warmupStatus: warmupEmailSchema.warmupStatus.default || null,
          creditsAvailable: newUserCredits, // Assuming it's always set to 100 as per schema
        };

        // Add the new warmup email to the existing array
        userData.warmupEmails.push(newWarmupEmailObj);

        // Update the document
        await userDoc.ref.update(userData);
        console.log("Warmup email added successfully.");
        res
          .status(200)
          .send({ status: true, message: "Warmup email added successfully" });
      }
    }
  } catch (error) {
    console.error("authController/addNewWarmUpEmail : ", error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

const redirectToGoogleAuth = async (req, res) => {
  const url =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${process.env.GOOGLE_CLIENT_ID}&` +
    `redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&` +
    `response_type=code&` +
    `scope=email profile  https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.send&` +
    `access_type=offline&` +
    `include_granted_scopes=true&` +
    `state=${generateRandomString(16)}`; // Function to generate a random string for state parameter

  res.redirect(url);
};
const redirectToMicrosoftAuth = async (req, res) => {
  const url =
    `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
    `client_id=${process.env.MICROSOFT_CLIENT_ID}&` +
    `response_type=code&` +
    `redirect_uri=${process.env.MICROSOFT_REDIRECT_URI}&` +
    `response_mode=query&` +
    `scope=user.read mail.send Mail.ReadWrite Mail.ReadWrite.Shared offline_access&` + // Updated scope with additional permissions
    `state=${generateRandomString(16)}`;

  res.redirect(url);
};
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// Function to handle the OAuth callback
async function handleGoogleOAuthCallback(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Error: No code received");
  }

  try {
    const { data } = await axios.post(
      "https://oauth2.googleapis.com/token",
      null,
      {
        params: {
          code,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          redirect_uri: process.env.GOOGLE_REDIRECT_URI,
          grant_type: "authorization_code",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Store the tokens securely, for example in a session or database
    // console.log("Access Token:", data);
    if (response.data.access_token) {
      console.log("We got access token for a user");
    }
    if (response.data.refresh_token) {
      console.log("We got refresh token for a user");
    }
    // console.log("Access Token:", data.access_token);
    // console.log("Refresh Token:", data.refresh_token);
    const userinfo = await OauthFunctions.getGmailProfileInfo(
      data.access_token
    );
    const firebaseRes = await storeEmailSetupDetails_v2(
      userinfo.email,
      "",
      userinfo.name,
      "smtp.gmail.com",
      "",
      data.access_token,
      data.refresh_token,
      data.expires_in
    );
    // res.send(
    //   `Authentication successful! You can close this window. Refresh Token`
    // );
    // res.redirect(
    //   `https://automatedemailwarmup.com/email-onboard?status=failed&email=${encodeURIComponent(
    //     userinfo.email
    //   )}&provider=google`
    // );
    res.redirect(
      `http://localhost:3000/email-onboard?status=success&email=${encodeURIComponent(
        userinfo.email
      )}&provider=google`
    );
  } catch (error) {
    console.error("Failed to exchange token:", error);
    res.status(500).send("Authentication failed");
  }
}

async function handleMicrosoftOAuthCallback(req, res) {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send("Error: No code received");
  }

  const requestBody = qs.stringify({
    code,
    client_id: process.env.MICROSOFT_CLIENT_ID,
    client_secret: process.env.MICROSOFT_CLIENT_SECRET,
    redirect_uri: process.env.MICROSOFT_REDIRECT_URI,
    grant_type: "authorization_code",
  });

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await axios.post(
      "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      requestBody,
      config
    );

    // Store the tokens securely, for example in a session or database

    // console.log("Response: ", response.data);
    if (response.data.access_token) {
      console.log("We got access token for a user");
    }
    if (response.data.refresh_token) {
      console.log("We got refresh token for a user");
    }
    // console.log("Access Token:", response.data.access_token);
    // console.log("Refresh Token:", response.data.refresh_token);
    const userinfo = await OauthFunctions.getMicrosoftProfileInfo(
      response.data.access_token
    );
    const firebaseRes = await storeEmailSetupDetails_v2(
      userinfo.email,
      "",
      userinfo.name,
      "smtp.office365.com",
      "",
      response.data.access_token,
      response.data.refresh_token,
      response.data.expires_in
    );
    // res.send("Authentication successful! You can close this window.");
    // res.redirect(
    //   `https://automatedemailwarmup.com/email-onboard?status=failed&email=${encodeURIComponent(
    //     userinfo.email
    //   )}&provider=google`
    // );
    res.redirect(
      `http://localhost:3000/email-onboard?status=success&email=${encodeURIComponent(
        userinfo.email
      )}&provider=google`
    );
  } catch (error) {
    console.error("Failed to exchange token:", error);
    res.status(500).send("Authentication failed");
  }
}

async function updateUserPaymentStatus(email, paymentStatus) {
  // Reference to the userCollection
  const userCollectionRef = db.collection(userCollection);

  try {
    // Query for the user by email
    const snapshot = await userCollectionRef.where("email", "==", email).get();

    if (snapshot.empty) {
      console.log("No matching user found.");
      return;
    }

    // Assuming each email is unique and only one document will match
    snapshot.forEach((doc) => {
      let updates = { paymentStatus: paymentStatus };

      // Optionally, adjust credits or other properties based on the payment status
      if (paymentStatus === "paid") {
        // Example: Increment credits when the user pays
        updates["credits"] = admin.firestore.FieldValue.increment(10); // Example increment, adjust as needed
      } else if (paymentStatus === "unpaid") {
        // Handle unpaid status, e.g., reset credits or leave them unchanged
        // updates['credits'] = ...; // Adjust according to your business logic
      }

      // Update the document
      doc.ref
        .update(updates)
        .then(() =>
          console.log(`Updated payment status for ${email} to ${paymentStatus}`)
        );
    });
  } catch (error) {
    console.error("Error updating user payment status:", error);
  }
}
async function storeEmailSetupDetails_v2(
  userEmail,
  password,
  name,
  serverDomain,
  apiKey,
  accessToken,
  refreshToken,
  expiresIn
) {
  if (!userEmail) {
    console.error("Email cannot be empty.");
    return { status: false, message: "Email cannot be empty." };
  }

  const userDetails = {
    email: userEmail,
    password: password, // Ensure password is hashed before calling this function
    name: name,
    serverDomain: serverDomain,
    apiKey: apiKey,
    accessToken: accessToken,
    refreshToken: refreshToken,
    expiresIn: expiresIn,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    tokenCreationAndUpdateTime: admin.firestore.FieldValue.serverTimestamp(),
  };

  const detailsRef = db.collection(emailSetupCollectionName);
  const snapshot = await detailsRef.where("email", "==", userEmail).get();

  if (snapshot.empty) {
    // No existing user details found, create new entry
    userDetails.createdAt = admin.firestore.FieldValue.serverTimestamp(); // Set createdAt only for new entries
    const newDetailsRef = await detailsRef.add(userDetails);
    console.log(`New user details created with ID: ${newDetailsRef.id}`);
    return { status: true, userExists: false, documentId: newDetailsRef.id };
  } else {
    // User details already exist, update the existing document
    const documentId = snapshot.docs[0].id; // Assuming the first document is the existing user details
    await detailsRef.doc(documentId).update(userDetails);
    console.log("User details updated for this email.");
    return { status: true, userExists: true, documentId: documentId };
  }
}
module.exports = {
  getUserLogin,
  createNewUser,
  addNewWarmUpEmail,
  redirectToGoogleAuth,
  redirectToMicrosoftAuth,
  handleGoogleOAuthCallback,
  handleMicrosoftOAuthCallback,
};
