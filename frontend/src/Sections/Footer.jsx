import "./Footer.css"
import logo from "../assets/image/logo.jpg"

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

<div className="footer-about">

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

<div className="social-icons">

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



</div>
<a href="/donate" className="footer-donate">
  Donate Now
</a>
</div>



{/* QUICK LINKS */}

<div className="footer-links">

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

</div>

{/* PROGRAMS */}

<div className="footer-links">

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

</div>

{/* CONTACT */}

<div className="footer-contact">

<h2>

Contact Info

</h2>

<div className="contact-item">

<FaMapMarkerAlt/>

<p>

Kampala, Uganda

</p>

</div>

<div className="contact-item">

<FaPhoneAlt/>

<p>

+256 746340871

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

</div>

</div>

{/* BOTTOM */}

<div className="footer-bottom">

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

</div>

</footer>

)

}