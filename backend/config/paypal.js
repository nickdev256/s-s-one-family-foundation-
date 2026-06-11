import paypal from "@paypal/checkout-server-sdk";

console.log(
  "CLIENT ID:",
  process.env.PAYPAL_CLIENT_ID
);

console.log(
  "SECRET:",
  process.env.PAYPAL_CLIENT_SECRET
    ? "Loaded"
    : "Missing"
);

const environment =
  new paypal.core.LiveEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  );

const paypalClient =
  new paypal.core.PayPalHttpClient(
    environment
  );

export default paypalClient;