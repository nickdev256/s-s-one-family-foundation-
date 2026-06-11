// controllers/pesapalController.js

import axios from "axios";

const BASE_URL =
"https://pay.pesapal.com/v3";

export const createPesapalOrder =
async (req, res) => {
try {

  const {
    amount,
    firstName,
    lastName,
    email,
    phone
  } = req.body;

  // GET AUTH TOKEN
  const authResponse =
    await axios.post(
      `${BASE_URL}/api/Auth/RequestToken`,
      {
        consumer_key:
          process.env.PESAPAL_CONSUMER_KEY,

        consumer_secret:
          process.env.PESAPAL_CONSUMER_SECRET,
      },
      {
        headers: {
          Accept:
            "application/json",
          "Content-Type":
            "application/json",
        },
      }
    );

  const token =
    authResponse.data.token;

  console.log(
    "PESAPAL TOKEN:",
    token
  );

  const order = {
    id:
      `DONATION-${Date.now()}`,

    currency: "UGX",

    amount,

    description:
      "S&S One Family Foundation Donation",

    callback_url:
      "https://ss-one-family-foundation.vercel.app/donation-success",

    notification_id:
      process.env.PESAPAL_IPN_ID,

    billing_address: {
      email_address:
        email,

      phone_number:
        phone,

      first_name:
        firstName,

      last_name:
        lastName,
    },
  };

  const orderResponse =
    await axios.post(
      `${BASE_URL}/api/Transactions/SubmitOrderRequest`,
      order,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,

          Accept:
            "application/json",

          "Content-Type":
            "application/json",
        },
      }
    );

  console.log(
    "PESAPAL ORDER:",
    orderResponse.data
  );

  return res.status(200).json(
    orderResponse.data
  );

} catch (err) {

  console.error(
    "PESAPAL ERROR:",
    err.response?.data ||
    err.message
  );

  return res.status(500).json({
    success: false,

    error:
      err.response?.data ||
      err.message,
  });

}


};
