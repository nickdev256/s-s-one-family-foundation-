import axios from "axios";

import { supabase } from "../config/supabaseClient.js";
import paypal from "@paypal/checkout-server-sdk";
import paypalClient from "../config/paypal.js";

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
   const { data, error } = await supabase
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
  ])
  .select();

console.log(
  "DONATION SAVED:",
  data
);

console.log(
  "DONATION ERROR:",
  error
);

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

  const request =
    new paypal.orders.OrdersCreateRequest();

  request.prefer("return=representation");

  request.requestBody({
    intent: "CAPTURE",

    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: (
            Number(amount) / 3700
          ).toFixed(2)
        }
      }
    ]
  });

  const order =
    await paypalClient.execute(request);

  return res.status(200).json({
    success: true,
    orderID: order.result.id
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
};export const capturePayPalOrder = async (
  req,
  res
) => {
  try {

    const { orderID } = req.body;

    const request =
      new paypal.orders.OrdersCaptureRequest(
        orderID
      );

    request.requestBody({});

    const capture =
      await paypalClient.execute(
        request
      );

    return res.status(200).json({
      success: true,
      details: capture.result
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};export const getDonations = async (
req,
res
) => {

try {


const {
  data,
  error
} = await supabase
  .from("donations")
  .select("*")
  .order(
    "created_at",
    {
      ascending: false
    }
  );

if (error) {

  return res.status(500).json({
    success: false,
    message: error.message
  });

}

return res.status(200).json({
  success: true,
  donations: data
});


} catch (error) {


console.error(error);

return res.status(500).json({
  success: false,
  message: error.message
});


}

};
