const Rajorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, currency } = req.body;
    const rajorpay = new Rajorpay({
      key_id: process.env.RAJOR_PAY_KEY,
      key_secret: process.env.RAJOR_PAY_SECRET,
    });
    const payment_capture = 1;
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    try {
      const response = await rajorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  }
}
