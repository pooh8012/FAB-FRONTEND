const Razorpay = require("razorpay");
const shortid = require("shortid");

//Razorpay API
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Razorpay Accound ID and Secret
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

    // Try and catch method to check the error of failure
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
  }
}
