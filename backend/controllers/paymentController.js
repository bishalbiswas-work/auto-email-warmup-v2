const admin = require("../db/dbSetup");
const db = admin.firestore();
const path = require("path");
const fs = require("fs");

const Stripe = require("stripe");
const stripe = Stripe(
  "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"
);

const returnPaymentPage = async (req, res) => {
  try {
    // Assuming the 'static_pages' directory is in the main folder, not inside the directory where this script resides
    const paymentPagePath = path.join(
      __dirname,
      "..",
      "static_pages",
      "payment.html"
    );
    res.sendFile(paymentPagePath);
  } catch (error) {
    console.error("paymentController/addNewWarmUpEmail : ", error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

const createCheckoutSessionForUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.send(200).send({ status: false, message: "Email missing" });
    }
    const sessionConfig = {
      line_items: [
        {
          price: "price_1OzV4dJCMgay6huUAiWsm6ML",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: "https://automatedemailwarmup.com/dashboard",
      cancel_url: "https://automatedemailwarmup.com/dashboard",
    };

    if (email) {
      sessionConfig.customer_email = email;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    res.status(200).send({ sessionId: session.id });
  } catch (error) {
    console.error("paymentController/addNewWarmUpEmail : ", error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

module.exports = {
  returnPaymentPage,
  createCheckoutSessionForUser,
};
