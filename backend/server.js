require("dotenv").config(); // Load environment variables from .env file

const path = require("path");
const express = require("express");
const cors = require("cors");
const cron = require("node-cron");

const app = express();
const admin = require("./db/dbSetup");
const Rollbar = require("rollbar");
let rollbar;

// New Imports
const backgroundTask = require("./backgroundTask/backgroundTask");
const errorRoutes = require("./routes/errorRoutes");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

app.use(express.json()); // For parsing application/json

const whitelist = [
  "http://localhost:3000", // React app's location in development
  "http://localhost:5000", // Optional: If you have another service running in production on this port
  "http://localhost:5001", // Optional: If you have another service running in production on this port
  "http://localhost:5002", // Optional: If you have another service running in production on this port

  "https://automatedemailwarmup.com", // Production frontend domain
  "https://www.automatedemailwarmup.com", // Production frontend domain with www
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use("static_pages", express.static("backend/static_pages"));

app.use("/api/error", errorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/payment", paymentRoutes);

if (process.env.NODE_ENV === "production") {
  rollbar = new Rollbar({
    accessToken: "23c1d6cbbea54c62a1ff888e4bea0c9b",
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: "production",
  });
  console.log("App in productin");

  // Use this middleware at the end of your middleware stack
  app.use(rollbar.errorHandler());
}

let PORT = 5001;

if (process.env.NODE_ENV === "production") {
  PORT = 5000;
} else {
  PORT = 5001;
}
cron.schedule("* * * * *", backgroundTask.backgroundTask); // Run every minute

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
