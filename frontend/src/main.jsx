import React from "react";
import ReactDOM from "react-dom/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import App from "./App";
import "./index.css";
console.log(
  "PAYPAL CLIENT ID:",
  import.meta.env.VITE_PAYPAL_CLIENT_ID
);
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        clientId:
          import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
      }}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
)