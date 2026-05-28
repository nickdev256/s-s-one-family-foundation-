import "./DonatePage.css"
import { useState } from "react"
import { FaHandsHelping, FaUsers, FaCheck } from "react-icons/fa"

export default function DonatePage() {

  const [step, setStep] = useState(1)

  const [donationType, setDonationType] = useState("General Fund")

  const [amount, setAmount] = useState(100)

  const [monthly, setMonthly] = useState(false)

  const [payment, setPayment] = useState("Credit Card")

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: ""
  })

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    paypalEmail: "",
    phone: ""
  })

  const amounts = [10, 25, 50, 100, 250]

  function update(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function donate() {
    alert(
      `Donation Submitted

Type: ${donationType}
Amount: $${amount}
Frequency: ${monthly ? "Monthly" : "One Time"}
Payment: ${payment}

Thank You ❤️`
    )
  }

  return (
    <div className="donate-page">

      {/* HERO */}
      <section className="donate-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Donate Now</h1>
          <p>
            Your support transforms lives through education, healthcare and community empowerment.
          </p>
        </div>
      </section>

      <section className="donate-container">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="donate-heading">
              <span>MAKE AN IMPACT</span>
              <h2>CHOOSE DONATION TYPE</h2>

              <div className="divider">
                <div /> ♡ <div />
              </div>

              <p>Choose where your support creates the greatest impact.</p>
            </div>

            <div className="option-grid">
              {[
                {
                  title: "General Fund",
                  icon: <FaHandsHelping />,
                  text: "Support our overall mission."
                },
                {
                  title: "Care For Children",
                  icon: <FaUsers />,
                  text: "Support vulnerable children."
                }
              ].map(card => (
                <button
                  key={card.title}
                  className={donationType === card.title ? "donation-card active" : "donation-card"}
                  onClick={() => setDonationType(card.title)}
                >
                  {donationType === card.title && (
                    <div className="selected">
                      <FaCheck />
                    </div>
                  )}

                  <div className="icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <div className="small-line" />
                  <p>{card.text}</p>
                </button>
              ))}
            </div>

            <div className="donate-action">
              <button onClick={() => setStep(2)}>CONTINUE →</button>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2>CHOOSE AMOUNT</h2>

            <div className="amount-grid">
              {amounts.map(item => (
                <div
                  key={item}
                  className={amount === item ? "amount-card active" : "amount-card"}
                  onClick={() => setAmount(item)}
                >
                  ${item}
                </div>
              ))}
            </div>

            <label className="monthly">
              <input
                type="checkbox"
                checked={monthly}
                onChange={() => setMonthly(!monthly)}
              />
              Monthly Donation
            </label>

            <div className="nav">
              <button onClick={() => setStep(1)}>BACK</button>
              <button onClick={() => setStep(3)} className="continue">
                CONTINUE
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2>YOUR DETAILS</h2>

            <form>
              <input name="firstName" placeholder="First Name" onChange={update} />
              <input name="lastName" placeholder="Last Name" onChange={update} />
              <input name="email" placeholder="Email" onChange={update} />
              <textarea name="comment" placeholder="Message" onChange={update} />
            </form>

            <div className="nav">
              <button onClick={() => setStep(2)}>BACK</button>
              <button onClick={() => setStep(4)} className="continue">
                CONTINUE
              </button>
            </div>
          </>
        )}

        {/* STEP 4 - PAYMENT */}
        {step === 4 && (
          <>
            <h2>PAYMENT METHOD</h2>

            <div className="payment-grid">
              {["Credit Card", "PayPal", "MTN Mobile Money", "Airtel Money"].map(method => (
                <button
                  key={method}
                  className={payment === method ? "active" : ""}
                  onClick={() => setPayment(method)}
                >
                  {method}
                </button>
              ))}
            </div>

            {/* CREDIT CARD */}
            {payment === "Credit Card" && (
              <div className="payment-form">
                <h3>Credit / Debit Card</h3>

                <input
                  placeholder="Card Number"
                  value={paymentData.cardNumber}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cardNumber: e.target.value })
                  }
                />

                <div className="row">
                  <input
                    placeholder="MM/YY"
                    value={paymentData.expiry}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, expiry: e.target.value })
                    }
                  />

                  <input
                    placeholder="CVV"
                    type="password"
                    value={paymentData.cvv}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, cvv: e.target.value })
                    }
                  />
                </div>

                <p className="hint">
                  Secure payment will be processed via your payment gateway.
                </p>
              </div>
            )}

            {/* PAYPAL */}
            {payment === "PayPal" && (
              <div className="payment-form">
                <h3>PayPal Checkout</h3>

                <input
                  placeholder="PayPal Email"
                  value={paymentData.paypalEmail}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, paypalEmail: e.target.value })
                  }
                />

                <p className="hint">
                  You will be redirected to PayPal to complete payment.
                </p>
              </div>
            )}

            {/* MTN */}
            {payment === "MTN Mobile Money" && (
              <div className="payment-form">
                <h3>MTN Mobile Money</h3>

                <input
                  placeholder="MTN Phone Number"
                  value={paymentData.phone}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, phone: e.target.value })
                  }
                />

                <p className="hint">
                  A prompt will be sent to your MTN phone to approve payment.
                </p>
              </div>
            )}

            {/* AIRTEL */}
            {payment === "Airtel Money" && (
              <div className="payment-form">
                <h3>Airtel Money</h3>

                <input
                  placeholder="Airtel Phone Number"
                  value={paymentData.phone}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, phone: e.target.value })
                  }
                />

                <p className="hint">
                  You will receive a payment request on Airtel Money.
                </p>
              </div>
            )}

            <div className="nav">
              <button onClick={() => setStep(3)}>BACK</button>
              <button onClick={() => setStep(5)} className="continue">
                CONTINUE
              </button>
            </div>
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <>
            <h2>DONATION SUMMARY</h2>

            <div className="summary">
              <p>Donation <span>{donationType}</span></p>
              <p>Amount <span>${amount}</span></p>
              <p>Frequency <span>{monthly ? "Monthly" : "One Time"}</span></p>
              <p>Payment <span>{payment}</span></p>
            </div>

            <div className="nav">
              <button onClick={() => setStep(4)}>BACK</button>
              <button className="continue" onClick={donate}>
                DONATE NOW
              </button>
            </div>
          </>
        )}

      </section>
    </div>
  )
}