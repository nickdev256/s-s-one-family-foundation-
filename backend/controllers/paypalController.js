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

    return res.status(200).json({
      success: true,
      orderID: order.result.id
    });

  } catch (error) {

    console.error(
      "CREATE ORDER ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to create order"
    });
  }
};

export const captureOrder = async (req, res) => {
  try {

    const { orderID } = req.body;

    const request =
      new paypal.orders.OrdersCaptureRequest(
        orderID
      );

    request.requestBody({});

    const capture =
      await client.execute(request);

    return res.status(200).json({
      success: true,
      capture: capture.result
    });

  } catch (error) {

    console.error(
      "CAPTURE ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to capture payment"
    });
  }
};