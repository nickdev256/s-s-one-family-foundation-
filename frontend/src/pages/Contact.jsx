import "./Contact.css"
import Footer from "../Sections/Footer";
import { motion } from "framer-motion";

import {
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope,
FaClock,
}

from "react-icons/fa";

export default function Contact(){

return(

<>
<div className="contact-page">

{/* HERO */}

<section className="contact-hero">

<div className="contact-overlay">
    
</div>

<div className="hero-content">

<h1>

Get In Touch

</h1>

<p>

We would love to hear from you.
Reach out and let’s create impact together.

</p>

</div>

</section>



{/* BODY */}

<section className="contact-body">

<motion.div

className="contact-info"

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

>



<h2>

Get In Touch

</h2>

<p>

We'd love to hear from you. Whether you'd like to volunteer,
partner with us, support our mission, or simply learn more,
our team is ready to help.

</p>


<div className="info-card">

<FaMapMarkerAlt/>

<div>

<h3>

Address

</h3>

<p>

Namasuba, Entebbe Road
<br/>
Kampala, Uganda

</p>

</div>

</div>



<div className="info-card">

<FaPhoneAlt/>

<div>

<h3>

Phone

</h3>

<p>

<a href="tel:+256746340871">

+256 746 340 871

</a>

<br/>

<a href="tel:+256756478200">

+256 756 478 200

</a>

</p>

</div>

</div>



<div className="info-card">

<FaEnvelope/>

<div>

<h3>

Email

</h3>

<p>

<a href="mailto:ssonefamilyfoundation1@gmail.com">

ssonefamilyfoundation1@gmail.com

</a>

</p>

</div>

</div>



<div className="info-card">

<FaClock/>

<div>

<h3>

Working Hours

</h3>

<p>

Mon — Fri • 8AM — 5PM

</p>

</div>

</div>

</motion.div>


<motion.div

className="contact-form"

initial={{
opacity:0,
x:80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

>

<h2>

Send Message

</h2>

<form>

<input
placeholder="Full Name:"
/>

<input
placeholder="Email Address:"
/>

<input
placeholder="Phone Number:"
/>

<input
placeholder="Subject:"
/>

<textarea

rows="7"

placeholder="Write your message:"

></textarea>

<button>

Submit

</button>

</form>

</motion.div>

</section>
</div>

<section className="contact-map">

  <h2>Visit Our Office</h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22503.389299578503!2d32.42303466836527!3d0.7000213948634421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c594d32bbb00b%3A0xb1d1b74e12bdd240!2sNamasuba!5e1!3m2!1sen!2sug!4v1781482727704!5m2!1sen!2sug"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="S&S One Family Foundation Location"
  />

</section>


<Footer />
</>   

)}