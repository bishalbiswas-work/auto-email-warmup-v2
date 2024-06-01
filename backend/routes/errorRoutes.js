const express = require("express");
const router = express.Router();
const { throwError } = require("../controllers/errorController");

// router.get("/", throwError);
router.route("/").get(throwError);
module.exports = router;
