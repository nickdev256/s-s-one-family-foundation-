
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

      /* Validation */

      if (
        !amount ||
        !firstName ||
        !lastName ||
        !email
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields",
        });
      }

      /* =================================
         AUTH TOKEN
      ================================= */

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

      /* =================================
         CREATE ORDER
      ================================= */

      const order = {
        id:
          `DONATION-${Date.now()}`,

        currency: "UGX",

        amount: Number(amount),

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
            phone || "",

          country_code:
            "UG",

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

      return res.status(200).json({
        success: true,

        orderTrackingId:
          orderResponse.data
            .order_tracking_id,

        merchantReference:
          orderResponse.data
            .merchant_reference,

        redirect_url:
          orderResponse.data
            .redirect_url,
      });

    } catch (err) {

      console.error(
        "PESAPAL ERROR:",
        err.response?.data ||
        err.message
      );

      return res.status(500).json({
        success: false,

        message:
          err.response?.data?.error ||
          err.message,

        error:
          err.response?.data ||
          err.message,
      });

    }
  };

