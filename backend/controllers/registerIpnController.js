import axios from "axios";

const BASE_URL =
  "https://pay.pesapal.com/v3/api";

export const registerIpn = async (
  req,
  res
) => {
  try {

    /* Get Access Token */

    const authResponse =
      await axios.post(
        `${BASE_URL}/Auth/RequestToken`,
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

    /* Register IPN */

    const ipnResponse =
      await axios.post(
        `${BASE_URL}/URLSetup/RegisterIPN`,
        {
          url:
            "https://s-s-one-family-foundation.onrender.com/api/pesapal/ipn",

          ipn_notification_type:
            "GET",
        },
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

    return res.status(200).json({
      success: true,
      data: ipnResponse.data,
    });

  } catch (error) {

    console.error(
      "REGISTER IPN ERROR:",
      error.response?.data ||
        error.message
    );

    return res.status(500).json({
      success: false,
      error:
        error.response?.data ||
        error.message,
    });

  }
};