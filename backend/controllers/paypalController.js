import paypal from "@paypal/checkout-server-sdk";
import client from "../config/paypal.js";

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const request =
      new paypal.orders.OrdersCreateRequest();

    request.prefer("return=representation");

    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount
          }
        }
      ]
    });

    const order =
      await client.execute(request);

    res.status(200).json({
      success: true,
      orderID: order.result.id
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};