const express = require("express");
const router = express.Router();
// const authController = require("../controllers/authController");
const userCollection = require("../controllers/userController");

router.route("/get-user-details").post(userCollection.getUserAccountDetails);
router
  .route("/update-user-details")
  .post(userCollection.updateUserAccountDetails);

router
  .route("/update-user-warmupstatus")
  .post(userCollection.updateUserSpecificEmailWarmupStatus);

router.route("/update-user-details").post(userCollection.updateUserDetails);
router
  .route("/get-email-warmup-setup")
  .post(userCollection.getEmailSetupDetails);

//getEmailSetupDetails
module.exports = router;
