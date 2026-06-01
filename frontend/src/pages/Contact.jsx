import "./Contact.css"

import {
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope,
FaClock
}

from "react-icons/fa"

export default function Contact(){

return(

<div className="contact-page">

{/* HERO */}

<section className="contact-hero">

<div className="contact-overlay"></div>

<div className="hero-content">

<h1>

CONTACT US

</h1>

<p>

We would love to hear from you.
Reach out and let’s create impact together.

</p>

</div>

</section>



{/* BODY */}

<section className="contact-body">

<div className="contact-info">

<h2>

Get In Touch

</h2>

<p>

Feel free to contact us for support,
partnerships, volunteering or inquiries.

</p>


<div className="info-card">

<FaMapMarkerAlt/>

<div>

<h3>

Address

</h3>

<p>

Namasuba , Entebbe Road
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

+256 746340871
+256 756 478200

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

ssonefamilyfoundation1@gmail.com

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

</div>



<div className="contact-form">

<h2>

Send Message

</h2>

<form>

<input
placeholder="Full Name"
/>

<input
placeholder="Email Address"
/>

<input
placeholder="Phone Number"
/>

<input
placeholder="Subject"
/>

<textarea

rows="7"

placeholder="Write your message"

></textarea>

<button>

SEND MESSAGE

</button>

</form>

</div>

</section>

</div>

)

}