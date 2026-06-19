import "./Footer.css"
import logo from "../assets/image/logo.jpg"
import { motion } from "framer-motion";

import {
FaFacebookF,
FaInstagram,
FaTwitter,
FaYoutube,
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope
}
from "react-icons/fa"

export default function Footer(){

return(

<footer className="footer">

<div className="footer-overlay"></div>

<div className="footer-container">

{/* LEFT */}

<motion.div
  className="footer-about"
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

<img
  src={logo}
  alt="S&S One Family Foundation"
  className="footer-logo"
/>

<h1>
  S&S One Family Foundation
</h1>

<p>
A registered community foundation committed to
empowering vulnerable children, families and
communities through education, healthcare,
livelihood support and sustainable development.
</p>

<div className="footer-impact">

<div>
<h3>500+</h3>
<span>Children Supported</span>
</div>

<div>
<h3>120</h3>
<span>Families Assisted</span>
</div>

<div>
<h3>UGX 6.8M+</h3>
<span>Community Impact</span>
</div>

</div>

<motion.div
  className="social-icons"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.6,
    delay: 0.8
  }}
  viewport={{ once: true }}
>

<a
href="https://www.facebook.com/"
target="_blank"
rel="noopener noreferrer"
>

<FaFacebookF/>

</a>

<a
href="https://www.instagram.com/ssonefamilyfoundation1/"
target="_blank"
rel="noopener noreferrer"
>

<FaInstagram/>

</a>

<a
href="https://x.com/SsOnefamily"
target="_blank"
rel="noopener noreferrer"
>

<FaTwitter/>

</a>

<a
href="https://www.youtube.com/@SsOnefamilyFoundation"
target="_blank"
rel="noopener noreferrer"
>

<FaYoutube/>

</a>



</motion.div>
<motion.a
  href="/donate"
  className="footer-donate"
  whileHover={{
    scale: 1.05,
    y: -3
  }}
  whileTap={{
    scale: 0.95
  }}
>
  Donate Now
</motion.a>
</motion.div>



{/* QUICK LINKS */}

<motion.div
  className="footer-links"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.2
  }}
  viewport={{ once: true }}
>

<h2>

Quick Links

</h2>

<a href="/">
Home
</a>

<a href="/about">
About Us
</a>

<a href="/programs">
Programs
</a>

<a href="/gallery">
Gallery
</a>

<a href="/volunteer">
Volunteer
</a>

<a href="/contact">
Contact
</a>

</motion.div>

{/* PROGRAMS */}

<motion.div
  className="footer-links"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.4
  }}
  viewport={{ once: true }}
>

<h2>

Our Programs

</h2>

<a href="#">
Child Support
</a>

<a href="#">
Education
</a>

<a href="#">
Community Outreach
</a>

<a href="#">
Health Support
</a>

<a href="#">
Youth Empowerment
</a>

</motion.div>

{/* CONTACT */}

<motion.div
  className="footer-contact"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.6
  }}
  viewport={{ once: true }}
>

<h2>

Contact Info

</h2>

<div className="contact-item">

<FaMapMarkerAlt/>

<p>

Namasuba , Entebbe Road 

</p>

</div>

<div className="contact-item">

<FaPhoneAlt/>

<p>

+256 746340871
+256 756 478200

</p>

</div>

<div className="contact-item">

<FaEnvelope/>

<p>

ssonefamilyfoundation1@gmail.com

</p>

</div>

<div className="newsletter">

<input
type="email"
placeholder="Enter your email"
/>

<button>

Subscribe

</button>

</div>

</motion.div>

</div>

{/* BOTTOM */}

<motion.div
  className="footer-bottom"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{
    duration: 1,
    delay: 0.8
  }}
  viewport={{ once: true }}
>

    <div className="footer-bottom-links">

<a href="/privacy-policy">
Privacy Policy
</a>

<a href="/terms">
Terms of Use
</a>

</div>

<p>

© 2026 S&S One Family Foundation.
All Rights Reserved.

</p>

</motion.div>

</footer>

)

}