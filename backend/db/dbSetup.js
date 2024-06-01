var admin = require("firebase-admin");

var serviceAccount = require("./firebasekeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firebase is now ready to be used in your application
module.exports = admin;
