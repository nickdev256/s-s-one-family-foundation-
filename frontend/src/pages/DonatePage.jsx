import "./DonatePage.css";
import { useState , useEffect} from "react";
import Footer from "../Sections/Footer";


import {
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaMobileAlt,
  FaCreditCard,
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

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    donationType: "general",

    amount: 100000,

    customAmount: "",

    recurring: false,

    paymentMethod: "MTN",

    firstName: "",
    lastName: "",
    email: "",
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
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
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

      const response = await fetch(
        "http://localhost:5000/api/donations/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStep(5);
    } catch (error) {
      alert(error.message);
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
              <input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  updateField(
                    "firstName",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  updateField(
                    "lastName",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  updateField(
                    "email",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  updateField(
                    "phone",
                    e.target.value
                  )
                }
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  updateField(
                    "message",
                    e.target.value
                  )
                }
              />
            </div>

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
                <FaMobileAlt />
                MTN MoMo
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
                <FaMobileAlt />
                Airtel Money
              </button>

              <button
                className={
                  formData.paymentMethod === "CARD"
                    ? "payment-card active"
                    : "payment-card"
                }
                onClick={() =>
                  updateField(
                    "paymentMethod",
                    "CARD"
                  )
                }
              >
                <FaCreditCard />
                Bank Card
              </button>
            </div>

            <div className="summary-card">
              <h3>Donation Summary</h3>

              <p>
                Amount:
                <strong>
                  UGX{" "}
                  {finalAmount.toLocaleString()}
                </strong>
              </p>

              <p>
                Frequency:
                <strong>
                  {formData.recurring
                    ? "Monthly"
                    : "One Time"}
                </strong>
              </p>

              <p>
                Payment:
                <strong>
                  {formData.paymentMethod}
                </strong>
              </p>
            </div>

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