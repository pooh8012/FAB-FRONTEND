/* eslint-disable import/no-anonymous-default-export */
// const nodemailer = require("nodemailer");

import { getDateInLocaleString } from "../../utils/function";

// export default async (req, res) => {
//   const { formData } = req.body;
//   const { name, email } = formData;

//   if (!email) {
//     return res.status(400).json({ message: "Email is required" });
//     console.log(email, "Verified email");
//   }
//   let testAccount = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "pjha.prakash0812@gmail.com",
//       pass: "xblebkezfycxmrcq",
//     },
//   });

//   const mailOptions = {
//     from: "pjha.prakash0812@gmail.com",
//     to: email,
//     subject: `Form Submition`,
//     text: `Hello ${name}, Thank you for ordering from our website we will happy to help you`,
//   };
//   try {
//     await testAccount.sendMail(mailOptions);
//     res.status(200).json({ message: "Email send" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "EMail failded" });
//   }
// };

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

  console.log(email);

  if (!email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  let testAccount = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "pjha.prakash0812@gmail.com",
      pass: "xblebkezfycxmrcq",
    },
  });

  const date = new Date();

  const mailOptions = {
    from: "pjha.prakash0812@gmail.com",
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
