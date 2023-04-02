export const razorpayInit = (bookingData, profile) => {
  try {
    return {
      key: process.env.RAJOR_PAY_KEY,
      currency: bookingData.razorpayInit.currency,
      amount: bookingData.razorpayInit.amount,
      order_id: bookingData.razorpayInit.orderId,
      name: "Fabiricology",
      callback_url: "http://localhost:3000",
      redirect: true,
      prefill: {
        email: profile?.email,
        contact: profile?.mobile,
      },
    };
  } catch (error) {
    alert(error);
    console.error(error);
    return error;
  }
};
