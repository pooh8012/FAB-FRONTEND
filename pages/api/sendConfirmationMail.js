/* eslint-disable import/no-anonymous-default-export */

import { getDateInLocaleString } from "../../utils/function";

const nodemailer = require("nodemailer");

export default async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    city,
    state,
    zipCode,
  } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  let testAccount = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "fabricatology@gmail.com",
      pass: "mqgnqfqdltyfirct",
    },
  });

  const date = new Date();

  const mailOptions = {
    from: "fabricatology@gmail.com",
    to: email,
    subject: `Order Confirmation`,
    // text: `Hello ${firstName} ${lastName}. Thank you for ordering from our website. Your communication address is ${address} ${city} ${state} ${zipCode}. Case of any delay with product we will notify you on this number ${phoneNumber}`,
    html: `
    <p>Dear ${firstName} ${lastName},</p>
    <p>Thank you for placing your order with FABRICATOLOGY. We are delighted to confirm that your order has been received and is currently being processed.</p>
    <p>We would like to assure you that our team is working hard to fulfill your order as soon as possible. Our current processing time is X days, after which your order will be shipped to the shipping address provided during checkout.</p>
    <p>Here is a summary of your order:</p>
    <ul>
      <li>Order Date: ${getDateInLocaleString(date)}</li>
      <li>Delivery Address: ${address}, ${city}, ${state}, ${zipCode}</li>
    </ul>
    <p>If you have any questions or concerns about your order, please do not hesitate to contact us. You can reach us by replying to this email. Our friendly customer service representatives will be more than happy to assist you.</p>
    <p>Thank you again for choosing FABRICATOLOGY, we look forward to serving you again in the future.</p>
  `,
  };

  try {
    await testAccount.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed" });
  }
};
