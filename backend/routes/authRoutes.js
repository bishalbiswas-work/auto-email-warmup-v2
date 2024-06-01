const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// router.get("/", throwError);
router.route("/login").post(authController.getUserLogin);
router.route("/signup-new").post(authController.createNewUser);
router.route("/add-warmup-email").post(authController.addNewWarmUpEmail);
// redirectToGoogleAuth,
// redirectToMicrosoftAuth,
router.route("/google").get(authController.redirectToGoogleAuth);
router.route("/microsoft").get(authController.redirectToMicrosoftAuth);
// handleGoogleOAuthCallback,
// handleMicrosoftOAuthCallback,
router
  .route("/google/oauth2callback")
  .get(authController.handleGoogleOAuthCallback);
router
  .route("/microsoft/oauth2callback")
  .get(authController.handleMicrosoftOAuthCallback);
module.exports = router;
