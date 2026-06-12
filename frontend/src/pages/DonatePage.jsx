import "./DonatePage.css";
import { useState , useEffect} from "react";
import Footer from "../Sections/Footer";
import mtnLogo from "../assets/image/mtn-momo.png";
import airtelLogo from "../assets/image/airtel-money.png";
import bankCardLogo from "../assets/image/yy.png";
import cardLogo from "../assets/image/card-preview.png";
import paypalLogo from "../assets/image/paypal.png";
import {
  PayPalButtons
} from "@paypal/react-paypal-js";
import {
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";


const DONATION_TYPES = [
  {
    id: "general",
    title: "General Fund",
    description:
      "Support our overall mission and ongoing community projects.",
    icon: <FaHandsHelping />,
  },
  {
    id: "children",
    title: "Care For Children",
    description:
      "Help vulnerable children access education, food and healthcare.",
    icon: <FaUsers />,
  },
];

const PRESET_AMOUNTS = [10000, 25000, 50000, 100000, 250000];

export default function DonatePage() {
  useEffect(() => {
  window.scrollTo(0, 0)}, [])
  
  const [step, setStep] = useState(1);
  const [orderID, setOrderID] =
  useState(null);
const API_URL = import.meta.env.VITE_API_URL;

console.log(
  "VITE_API_URL =",
  import.meta.env.VITE_API_URL
);


  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [showCardForm, setShowCardForm] = useState(false);

  const [formData, setFormData] = useState({
    
  donationType: "general",

  amount: 100000,

  customAmount: "",

  recurring: false,

  paymentMethod: "MTN",

  firstName: "",
  lastName: "",
  email: "",

  countryCode: "+256",

  phone: "",

  message: "",
});

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep3 = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

   if (!formData.email.trim()) {
  newErrors.email = "Email is required";
} else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
) {
  newErrors.email = "Please enter a valid email address";
}

 if (!formData.phone.trim()) {

  newErrors.phone =
    "Phone number is required";

} else if (
  !/^([0-9]{9,15})$/.test(formData.phone)
) {

  newErrors.phone =
    "Enter a valid phone number";

}
else if (!/^\d+$/.test(formData.phone)) {
  newErrors.phone =
    "Phone number should contain only numbers";

}


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 3) {
      if (!validateStep3()) return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

 const submitDonation = async () => {
try {
setLoading(true);


// PESAPAL VISA PAYMENT
if (formData.paymentMethod === "VISA CARD") {

  const response = await fetch(
    `${API_URL}/api/pesapal/create-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        amount: finalAmount,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      }),
    }
  );

  const data = await response.json();

  console.log("PESAPAL RESPONSE:", data);
  console.log(
  "REDIRECT URL:",
  data.redirect_url
);

  if (data.redirect_url) {
    window.location.href = data.redirect_url;
    return;
  }

  throw new Error("Failed to initialize Pesapal payment");
}

// PAYPAL PAYMENT
const response = await fetch(
  `${API_URL}/api/paypal/create-order`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      donationType: formData.donationType,
      amount: finalAmount,
      monthly: formData.recurring,
      payment: formData.paymentMethod,

      form: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        comment: formData.message,
      },

      paymentData: {},
    }),
  }
);

const data = await response.json();

if (!response.ok) {
  throw new Error(
    data.message || "Donation failed"
  );
}

if (
  formData.paymentMethod === "PayPal" &&
  data.orderID
) {
  console.log(
    "PayPal Order ID:",
    data.orderID
  );

  setOrderID(data.orderID);
  return;
}

setStep(5);


} catch (error) {

console.error(error);

alert(
  error.message || "Something went wrong"
);


} finally {

setLoading(false);


}
};


  const finalAmount =
    formData.customAmount !== ""
      ? Number(formData.customAmount)
      : formData.amount;

  return (
    <>
    <div className="donate-page">
      {/* HERO */}

      <section id="donate-hero" className="donate-hero">
        <div className="overlay" />

        <div className="hero-content">
          

<h1 className="hero-title">
  Transform Lives
  <span className="hero-script">Through Giving</span>
</h1>

          <p>
            Every contribution helps us provide
            education, healthcare and hope to
            vulnerable communities.
          </p>
        </div>
      </section>

      {/* MAIN CARD */}

     


   <div className="trust-strip">

  <div>
    <strong>500+</strong>
    <span>Children Supported</span>
  </div>

  <div>
    <strong>120</strong>
    <span>Families Assisted</span>
  </div>

  <div>
    <strong>UGX 6.8M+</strong>
    <span>Community Impact</span>
  </div>

</div>

 <div className="impact-intro">

  <h2>Every Gift Creates Lasting Change</h2>

  <p>
    Your support provides education, healthcare,
    food relief and protection for vulnerable
    children and families across Uganda.
  </p>

</div>

      <div className="donation-wrapper">
        {/* PROGRESS */}

        <div className="progress-bar">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={
                step >= item
                  ? "progress-step active"
                  : "progress-step"
              }
            >
              {item}
            </div>
          ))}
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <div className="section-header">
              <h2>Select Donation Cause</h2>

              <p>
                Choose where you would like your
                donation to make an impact.
              </p>
            </div>

            <div className="cause-grid">
              {DONATION_TYPES.map((item) => (
                <button
                  key={item.id}
                  className={
                    formData.donationType === item.id
                      ? "cause-card active"
                      : "cause-card"
                  }
                  onClick={() =>
                    updateField(
                      "donationType",
                      item.id
                    )
                  }
                >
                  <div className="cause-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </button>
              ))}
            </div>

            <button
              className="primary-btn"
              onClick={nextStep}
            >
             <h3> Continue </h3>
            </button>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <div className="section-header">
              <h2>Select Amount</h2>
            </div>

            <div className="amount-grid">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  className={
                    formData.amount === amount
                      ? "amount-card active"
                      : "amount-card"
                  }
                  onClick={() =>
                    updateField(
                      "amount",
                      amount
                    )
                  }
                >
                  UGX {amount.toLocaleString()}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom Amount"
              value={formData.customAmount}
              onChange={(e) =>
                updateField(
                  "customAmount",
                  e.target.value
                )
              }
            />

            <label className="checkbox">
              <input
                type="checkbox"
                checked={formData.recurring}
                onChange={() =>
                  updateField(
                    "recurring",
                    !formData.recurring
                  )
                }
              />

              Monthly Donation
            </label>

            <div className="buttons">
              <button
                className="secondary-btn"
                onClick={prevStep}
              >
                Back
              </button>

              <button
                className="primary-btn"
                onClick={nextStep}
              >
                Continue
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <div className="section-header">
              <h2>Your Information</h2>
            </div>

            <div className="form-grid">

<div className="input-group">
  <input
    type="text"
    placeholder=""
    value={formData.firstName}
    onChange={(e)=>
      updateField("firstName", e.target.value)
    }
  />
  <label>First Name:</label>

  {errors.firstName && (
    <span className="error-text">
      {errors.firstName}
    </span>
  )}
</div>


<div className="input-group">
  <input
    type="text"
    placeholder=""
    value={formData.lastName}
    onChange={(e)=>
      updateField("lastName", e.target.value)
    }
  />

  <label>Last Name:</label>

  {errors.lastName && (
    <span className="error-text">
      {errors.lastName}
    </span>
  )}
</div>


<div className="input-group">
  <input
    type="email"
    placeholder=""
    value={formData.email}
    onChange={(e)=>
      updateField("email", e.target.value)
    }
    required
  />

  <label>Email Address:</label>

  {errors.email && (
    <span className="error-text">
      {errors.email}
    </span>
  )}
</div>


<div className="input-group phone-group">

  <select
  value={formData.country}
  onChange={(e) =>
    updateField("country", e.target.value)
  }
>
  <option value="UG">Uganda</option>
  <option value="KE">Kenya</option>
  <option value="TZ">Tanzania</option>
  <option value="RW">Rwanda</option>
  <option value="US">United States</option>
  <option value="GB">United Kingdom</option>
</select>

  <input
  type="tel"
  placeholder=""
  value={formData.phone}
  onChange={(e)=>{
    const value = e.target.value.replace(/\D/g, "");
    updateField("phone", value);
  }}
/>

  <label>Phone Number:</label>

  {errors.phone && (
    <span className="error-text">
      {errors.phone}
    </span>
  )}

</div>


<div className="input-group textarea-group">

  <textarea
    placeholder=" "
    value={formData.message}
    onChange={(e)=>
      updateField("message",e.target.value)
    }
  />

  <label>Message:</label>

</div>
            </div>

            {Object.keys(errors).length > 0 && (
  <div className="form-error">
    Please fill in all required fields before continuing.
  </div>
)}

            <div className="buttons">
              <button
                className="secondary-btn"
                onClick={prevStep}
              >
                Back
              </button>

              <button
                className="primary-btn"
                onClick={nextStep}
              >
                Continue
              </button>
            </div>
          </>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <>
            <div className="section-header">
              <h2>Payment Method</h2>
            </div>

            <div className="payment-grid">
              <button
                className={
                  formData.paymentMethod === "MTN"
                    ? "payment-card active"
                    : "payment-card"
                }
                onClick={() =>
                  updateField(
                    "paymentMethod",
                    "MTN"
                  )
                }
              >
                <img
  src={mtnLogo}
  alt="MTN MoMo"
  className="payment-logo"
/>

              </button>

              <button
                className={
                  formData.paymentMethod === "AIRTEL"
                    ? "payment-card active"
                    : "payment-card"
                }
                onClick={() =>
                  updateField(
                    "paymentMethod",
                    "AIRTEL"
                  )
                }
              >
                <img
  src={airtelLogo}
  alt="Airtel Money"
  className="payment-logo"
/>


              </button>

              

              <button
                className={
                  formData.paymentMethod === "VISA CARD"
                    ? "payment-card active"
                    : "payment-card"
                }
                onClick={() => {
  updateField("paymentMethod", "VISA CARD");
  setShowCardForm(!showCardForm);
}}
              >
                <img
  src={bankCardLogo}
  alt="Bank Card"
  className="bank-card-logo"
/>

<span></span>
              </button>


             

              

              <button
  className={
    formData.paymentMethod === "PayPal"
      ? "payment-card active"
      : "payment-card"
  }
  onClick={() => {
    updateField("paymentMethod", "PayPal");
    setShowCardForm(true);
  }}
>
  <img
    src={paypalLogo}
    alt="PayPal"
    className="paypal-logo"
  />

  <span></span>
</button>




              
            </div>

            

{formData.paymentMethod === "VISA CARD" && (

  <div className="card-details">

    <div className="card-row">




<div className="input-group">

  <input type="text" placeholder="" />

  <label>Card Number:</label>

  <img
    src={cardLogo}
    alt="Card"
    className="card-preview"
  />

</div>

      <div className="input-group">
        <input type="text" placeholder="" />
        <label>CVC:</label>
      </div>

    </div>

    <div className="card-row">

      <div className="input-group">
        <input type="text" placeholder="" />
        <label>Cardholder Name:</label>
      </div>

      <div className="input-group">
        <input type="text" placeholder="" />
        <label>MM / YY:</label>
      </div>

    </div>

  </div>

)}



           <div className="summary-card">

  <div className="summary-header">
    <FaHeart />
    <h3>Donation Summary</h3>
  </div>

  <div className="summary-row">
    <span>Donation Amount</span>
    <strong>
      UGX {finalAmount.toLocaleString()}
    </strong>
  </div>

  <div className="summary-row">
    <span>Frequency</span>
    <strong>
      {formData.recurring ? "Monthly" : "One Time"}
    </strong>
  </div>

  <div className="summary-row">
    <span>Payment Method</span>
    <strong>
      {formData.paymentMethod}
    </strong>
  </div>

  <div className="summary-impact">
    <p>
      Your contribution helps provide education,
      healthcare and community support to vulnerable
      children and families across Uganda.
    </p>
  </div>

</div>
{orderID && (
  <div
    style={{
      marginTop: "20px"
    }}
  >
    <PayPalButtons
  createOrder={() => {
    console.log("Using order:", orderID);
    return Promise.resolve(orderID);
  }}

  onApprove={async (data) => {
    console.log("APPROVED", data);

    const response = await fetch(
      `${API_URL}/api/paypal/capture-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      }
    );

    const result = await response.json();

    console.log("CAPTURE RESULT", result);

    if (result.success) {
      setStep(5);
    }
  }}

  onError={(err) => {
    console.error("PAYPAL ERROR", err);
  }}

  onCancel={(data) => {
    console.log("PAYPAL CANCELLED", data);
  }}
/>
  </div>
)}
            <div className="buttons">
              <button
                className="secondary-btn"
                onClick={prevStep}
              >
                Back
              </button>

              <button
                className="primary-btn"
                disabled={loading}
                onClick={submitDonation}
              >
                {loading
                  ? "Processing..."
                  : "Donate Now"}
              </button>
            </div>
          </>
        )}

        {/* SUCCESS */}

        {step === 5 && (
          <div className="success-screen">
            <FaCheckCircle />

            <h2>
              Donation Submitted Successfully
            </h2>

            <p>
              Thank you for supporting our
              mission.
            </p>
          </div>
        )}
      </div>
    </div>
    <Footer />
  </>
)}