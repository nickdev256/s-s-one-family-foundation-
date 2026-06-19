import "./Donate.css"
import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


export default function Donation() {

  const statsRef = useRef(null)

  const isInView = useInView(statsRef, {
    once: true,
    amount: 0.4
  })

  const [childrenCount, setChildrenCount] = useState(0)
  const [familiesCount, setFamiliesCount] = useState(0)
  const [raisedCount, setRaisedCount] = useState(0)

  useEffect(() => {

    if (!isInView) return

    let children = 0
    let families = 0
    let raised = 0

    const interval = setInterval(() => {

      if (children < 500) {
        children += 3
        setChildrenCount(children)
      }

      if (families < 120) {
        families += 1
        setFamiliesCount(families)
      }

      if (raised < 6850) {
        raised += 50
        setRaisedCount(raised)
      }

    }, 25)

    setTimeout(() => {
      clearInterval(interval)

      setChildrenCount(500)
      setFamiliesCount(120)
      setRaisedCount(6850)

    }, 2500)

    return () => clearInterval(interval)

    

  }, [isInView])

  // impacts array continues here...

const impacts = [
{
amount: "$25",
title: "Education",
impact: "Provides school supplies for one child"
},
{
amount: "$50",
title: "Food Support",
impact: "Feeds a vulnerable family for a week"
},
{
amount: "$100",
title: "Healthcare",
impact: "Supports medical care and treatment"
},
{
amount: "$250",
title: "Child Sponsorship",
impact: "Supports a child for an entire month"
}
]

const [selected, setSelected] = useState(0)

return (
  
  <section className="donation">

```
  <div className="donation-overlay"></div>

  <motion.div
  className="donation-content"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut"
  }}
  viewport={{ once: true, amount: 0.2 }}
>

    <div className="donation-tag">
      MAKE A DIFFERENCE
    </div>

    <h1 className="donation-title">
      Your Support
      
      Creates Hope
    </h1>

    <p className="donation-text">
      Every contribution helps us empower vulnerable children and communities.
    </p>

<div
  className="impact-stats"
  ref={statsRef}
>
 
  <div>
    <h3>{childrenCount}+</h3>
    <p>Children Supported</p>
  </div>

  <div>
    <h3>{familiesCount}</h3>
    <p>Families Assisted</p>
  </div>

  <div>
    <h3>${raisedCount.toLocaleString()}</h3>
    <p>Raised This Year</p>
  </div>

</div>

    <div className="progress-section">

      <div className="progress-header">
        <span>Raised: $6,850</span>
        <span>Goal: $10,000</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: "68%" }}
        ></div>
      </div>

    </div>

    <div className="donation-grid">

      {impacts.map((item, index) => (

      <motion.div
  key={index}
  className={
    selected === index
      ? "donation-card active"
      : "donation-card"
  }
  onClick={() => setSelected(index)}
  initial={{
  opacity: 0,
  scale: 0.9,
  y: 60
}}
  whileInView={{
  opacity: 1,
  scale: 1,
  y: 0
}}
  transition={{
    duration: 0.6,
    delay: index * 0.15
  }}
  viewport={{ once: true, amount: 0.2 }}
>

          <div className="impact-amount">
            {item.amount}
          </div>

          <h2>{item.title}</h2>

          <p>{item.impact}</p>

        </motion.div>

      ))}

    </div>

    <div className="selected">
      Selected:
      <strong>
        {impacts[selected].title}
      </strong>
    </div>

    <p className="donation-trust">
      Your gift today can help a child stay in school, receive healthcare, and grow in a safe environment.
    </p>

    <Link
      to="/donate"
      className="donate-link"
    >
      <button className="donate-btn">
        GIVE HOPE TODAY
      </button>
    </Link>

 </motion.div>

</section>


)
}
