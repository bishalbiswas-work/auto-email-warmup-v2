const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Function to read email accounts from the JSON file
function readEmailAccounts() {
  const filePath = path.join(__dirname, "emailAccounts", "emailAccounts.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Function to read email templates from the JSON file
function readEmailTemplates() {
  const filePath = path.join(__dirname, "emailAccounts", "emailTemplates.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Function to send email
// We are using less secure method here (SMPT Protocol)

async function sendEmail(details, target, heading, body) {
  const emailServerSettings = {
    host: new Buffer("bWFpbC5wcml2YXRlZW1haWwuY29t", "base64").toString(
      "ascii"
    ),
    port: parseInt("587"),
    secure: false, // Note: secure is set to false as port is 587
    auth: {
      user: details.email,
      pass: (() => {
        let result = "";
        for (let i = 0; i < details.appPassword.length; i++) {
          result += details.appPassword.charAt(i);
        }
        return result;
      })(),
    },
  };

  const emailClient =
    require("nodemailer").createTransport(emailServerSettings);

  let modifiedBody = (() => {
    let result = "";
    for (let i = 0; i < body.length; i++) {
      if (body.charAt(i) === "\n") {
        result += "<br>";
      } else {
        result += body.charAt(i);
      }
    }
    return result;
  })();

  let emailSpecifications = {
    from: `"${details.email}" <${details.email}>`,
    to: target,
    subject: (() => {
      const additionalText = " of-AutomatedEmailWarmUp";
      let newSubject = heading.concat(additionalText);
      return newSubject;
    })(),
    text: body,
    html: modifiedBody,
  };

  const sendProcess = async (client, mailDetails) => {
    try {
      let transmissionOutcome = await client.sendMail(mailDetails);
      console.log(
        `Message sent from ${details.email}: %s`,
        transmissionOutcome.messageId
      );
    } catch (error) {
      console.error(`Error occurred in ${details.email}:`, error);
    }
  };

  await sendProcess(emailClient, emailSpecifications);
}
async function sendEmailByUser(details, target, heading, body) {
  const emailServerSettings = {
    host: new Buffer("c210cC5nbWFpbC5jb20=", "base64").toString("ascii"),
    port: parseInt("587"),
    secure: false, // Note: secure is set to false as port is 587
    auth: {
      user: details.email,
      pass: (() => {
        let result = "";
        for (let i = 0; i < details.appPassword.length; i++) {
          result += details.appPassword.charAt(i);
        }
        return result;
      })(),
    },
  };

  const emailClient =
    require("nodemailer").createTransport(emailServerSettings);

  let modifiedBody = (() => {
    let result = "";
    for (let i = 0; i < body.length; i++) {
      if (body.charAt(i) === "\n") {
        result += "<br>";
      } else {
        result += body.charAt(i);
      }
    }
    return result;
  })();

  let emailSpecifications = {
    from: `"${details.email}" <${details.email}>`,
    to: target,
    subject: (() => {
      const additionalText = " of-AutomatedEmailWarmUp";
      let newSubject = heading.concat(additionalText);
      return newSubject;
    })(),
    text: body,
    html: modifiedBody,
  };

  const sendProcess = async (client, mailDetails) => {
    try {
      let transmissionOutcome = await client.sendMail(mailDetails);
      console.log(
        `Message sent from ${details.email}: %s`,
        transmissionOutcome.messageId
      );
    } catch (error) {
      console.error(`Error occurred in ${details.email}:`, error);
    }
  };

  await sendProcess(emailClient, emailSpecifications);
}

// Active email processes tracking
const activeProcesses = new Set();

// Function to start the email sending process
function startSendingEmails(recipientEmail, interval, numberOfEmails) {
  if (activeProcesses.has(recipientEmail)) {
    console.log(`Email process already running for ${recipientEmail}`);
    return; // Skip if this email process is already running
  }

  activeProcesses.add(recipientEmail);

  const emailAccounts = readEmailAccounts();
  const emailTemplates = readEmailTemplates();
  let emailCount = 0;
  let accountIndex = 0;
  let templateIndex = 0;

  const emailInterval = setInterval(() => {
    if (emailCount >= numberOfEmails) {
      clearInterval(emailInterval);
      activeProcesses.delete(recipientEmail);
      console.log(`All emails sent to ${recipientEmail}.`);
      return;
    }

    const account = emailAccounts[accountIndex];
    const template = emailTemplates[templateIndex];
    const personalizedContent = template.body.replace("{{name}}", account.name);

    sendEmail(account, recipientEmail, template.subject, personalizedContent);

    emailCount++;
    accountIndex = (accountIndex + 1) % emailAccounts.length;
    templateIndex = (templateIndex + 1) % emailTemplates.length;
  }, interval * 1000);
}

async function sendEmailIndividually(recipientEmail) {
  const emailAccounts = readEmailAccounts(); // Assume this reads email accounts from a data source
  const emailTemplates = readEmailTemplates(); // Assume this reads email templates from a data source

  // Randomly select an account and a template
  const accountIndex = Math.floor(Math.random() * emailAccounts.length);
  const templateIndex = Math.floor(Math.random() * emailTemplates.length);

  const account = emailAccounts[accountIndex];
  const template = emailTemplates[templateIndex];
  const personalizedContent = template.body.replace("{{name}}", account.name);

  // Sending the email
  console.log("Account: ", account);
  sendEmail(account, recipientEmail, template.subject, personalizedContent);
}

async function sendEmailIndividuallyByUser(name, recipientEmail, appPassword) {
  const emailAccounts = readEmailAccounts(); // Assume this reads email accounts from a data source
  const emailTemplates = readEmailTemplates(); // Assume this reads email templates from a data source

  // Randomly select an account and a template
  const accountIndex = Math.floor(Math.random() * emailAccounts.length);
  const templateIndex = Math.floor(Math.random() * emailTemplates.length);

  const senderAccount = {
    name: name,
    email: recipientEmail,
    appPassword: appPassword,
  };

  const account = emailAccounts[accountIndex];
  const template = emailTemplates[templateIndex];
  const personalizedContent = template.body.replace("{{name}}", account.name);

  // Sending the email
  // console.log("Account: ", account);
  sendEmailByUser(
    senderAccount,
    account.email,
    template.subject,
    personalizedContent
  );
}
// Example usage
// sendEmailIndividually("bishalbiswas.work@gmail.com");
// startSendingEmails("recipient1@example.com", 10, 1);
// startSendingEmails("recipient1@example.com", 10, 1);
// startSendingEmails("recipient1@example.com", 30, 5); // This call will be skipped if already running

module.exports = {
  startSendingEmails,
  sendEmailIndividually,
  sendEmailIndividuallyByUser,
};
