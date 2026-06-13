import paypal from "@paypal/checkout-server-sdk";
import client from "../config/paypal.js";
import { supabase } from "../config/supabaseClient.js";

export const createOrder = async (req, res) => {

try {

```
const {
  donationType,
  amount,
  monthly,
  payment,
  form
} = req.body;

// SAVE DONATION FIRST
const {
  data: donation,
  error
} = await supabase
  .from("donations")
  .insert([
    {
      first_name:
        form.firstName,

      last_name:
        form.lastName,

      email:
        form.email,

      comment:
        form.comment,

      donation_type:
        donationType,

      amount:
        amount,

      frequency:
        monthly
          ? "Monthly"
          : "One Time",

      payment_method:
        payment,

      status:
        "pending"
    }
  ])
  .select();

if (error) {

  console.error(
    "DONATION SAVE ERROR:",
    error
  );

  return res.status(500).json({
    success: false,
    message: error.message
  });

}

console.log(
  "DONATION SAVED:",
  donation
);

const request =
  new paypal.orders.OrdersCreateRequest();

request.prefer(
  "return=representation"
);

request.requestBody({

  intent: "CAPTURE",

  application_context: {

    shipping_preference:
      "NO_SHIPPING",

    user_action:
      "PAY_NOW"

  },

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
  await client.execute(
    request
  );

return res.status(200).json({

  success: true,

  orderID:
    order.result.id

});
```

} catch (error) {

```
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
```

}

};

export const captureOrder = async (
req,
res
) => {

try {

```
const { orderID } =
  req.body;

const request =
  new paypal.orders.OrdersCaptureRequest(
    orderID
  );

request.requestBody({});

const capture =
  await client.execute(
    request
  );

return res.status(200).json({

  success: true,

  capture:
    capture.result

});
```

} catch (error) {

```
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
```

}

};
