import axios from "axios";

import { supabase } from "../supabaseClient.js";

export const createDonation = async (req, res) => {

  try {

    const {
      donationType,
      amount,
      monthly,
      payment,
      form,
      paymentData,
    } = req.body;

    // SAVE DONATION
    const { error } = await supabase
      .from("donations")
      .insert([
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          comment: form.comment,

          donation_type: donationType,

          amount: amount,

          frequency: monthly
            ? "Monthly"
            : "One Time",

          payment_method: payment,

          status: "pending",
        },
      ]);

    if (error) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }

    // MTN MOMO
    if (payment === "MTN Mobile Money") {

      return res.status(200).json({
        success: true,
        message: "MTN MOMO request initialized",
      });

    }

    // PAYPAL
    if (payment === "PayPal") {

      return res.status(200).json({
        success: true,
        message: "Redirecting to PayPal",
      });

    }

    // CREDIT CARD
    if (payment === "Credit Card") {

      return res.status(200).json({
        success: true,
        message: "Card payment initialized",
      });

    }

    // AIRTEL
    if (payment === "Airtel Money") {

      return res.status(200).json({
        success: true,
        message: "Airtel payment request initialized",
      });

    }

    return res.status(200).json({
      success: true,
      message: "Donation submitted",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};