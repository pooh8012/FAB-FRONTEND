// const nodemailer = require("nodemailer");

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

  const mailOptions = {
    from: "pjha.prakash0812@gmail.com",
    to: email,
    subject: `Form Submission`,
    text: `Hello ${firstName} ${lastName}. Thank you for ordering from our website. Your communication address is ${address} ${city} ${state} ${zipCode}. Case of any delay with product we will notify you on this number ${phoneNumber}`,
  };

  try {
    await testAccount.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed" });
  }
};
