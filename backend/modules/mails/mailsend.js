"use strict";
const nodemailer = require("nodemailer");

const EMAIL = "indikatransport8@gmail.com";
const PASSWORD = "itvn bgkz avxp imgl";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

async function sendMail(clientEmail, sub, message) {
  try {
    await transporter.sendMail({
      from: EMAIL,
      to: clientEmail,
      subject: sub,
      html: message,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;
