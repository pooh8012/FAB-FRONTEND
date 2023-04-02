// const Razorpay = require("razorpay");
// const shortId = require("shortid");

// exports.razorpay = new Razorpay({
//   key_id: process.env.RAJOR_PAY_KEY,
//   key_secret: process.env.RAJOR_PAY_SECRET,
// });

// exports.createOrder = async ({ amount, booking }) => {
//   try {
//     const payment_capture = 1;
//     const currency = "INR";
//     const options = {
//       amount: parseInt(amount * 100),
//       currency,
//       receipt: shortId.generate(),
//       payment_capture,
//       notes: {
//         Amount: amount,
//         CustomerName: booking?.userId?.fullName,
//         CustomerNumber: booking?.userId?.mobile,
//         Email: booking?.userId?.email,
//         bookingType: "Products",
//       },
//     };
//     const response = await this.razorpay.orders.create(options);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log(process.env.RAZOR_PAY_KEY_ID);
    // console.log(process.env.RAZOR_PAY_KEY_SECRET);
    const razorpay = new Razorpay({
      key_id: "rzp_test_PjvHICxuulxUe6",
      key_secret: "vW3qrIvh0vYfgylk9ajWF1DS",
    });

    const payment_capture = 1;
    const { amount } = req.body; // get the amount from the request body
    const currency = "INR";
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
