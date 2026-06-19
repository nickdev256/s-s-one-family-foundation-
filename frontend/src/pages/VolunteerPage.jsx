import "./VolunteerPage.css"
import Footer from "../Sections/Footer";
import { useState } from "react";
import { motion } from "framer-motion";


export default function VolunteerPage(){

const [form,setForm]=useState({

name:"",
email:"",
phone:"",
interest:"",
message:""

})

const [submitted, setSubmitted] = useState(false);

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

})

}

const handleSubmit=(e)=>{

e.preventDefault();

setSubmitted(true);

setForm({
name:"",
email:"",
phone:"",
interest:"",
message:""
});

setTimeout(() => {
setSubmitted(false);
},5000);

}



return(
<>

<div className="volunteer-page">

<div className="volunteer-overlay"></div>

<div className="volunteer-container">

<motion.div
className="volunteer-header"

initial={{
opacity:0,
y:-70
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}
>
 
<span>
JOIN OUR TEAM
</span>

<h1>
Become A Volunteer
</h1>

<p>

Join our mission and help transform lives,
empower communities and create lasting impact.

</p>

</motion.div>

<section className="volunteer-benefits">

<motion.div
  className="benefit-card"
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 0,
  }}
  viewport={{
    once: true,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>

<div className="benefit-icon">

❤️

</div>

<h3>

Make an Impact

</h3>

<p>

Help transform the lives of vulnerable children,
families and communities through meaningful service.

</p>

</motion.div>

<motion.div
  className="benefit-card"
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 0,
  }}
  viewport={{
    once: true,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>

<div className="benefit-icon">

🤝

</div>

<h3>

Join a Passionate Team

</h3>

<p>

Work alongside dedicated volunteers who are
committed to creating lasting change.

</p>

</motion.div>

<motion.div
  className="benefit-card"
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 0,
  }}
  viewport={{
    once: true,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>

<div className="benefit-icon">

🌍

</div>

<h3>

Build Skills

</h3>

<p>

Develop leadership, teamwork and community
service experience while making a difference.

</p>

</motion.div>

</section>


<div className="volunteer-content">

{submitted && (

<div className="success-message">

<h3>🎉 Thank You!</h3>

<p>

Your volunteer application has been received.
We will contact you soon.

</p>

</div>

)}


<motion.form

className="volunteer-form"

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

onSubmit={handleSubmit}
>

<h2>

Volunteer Registration

</h2>

<p>

Complete the form below and our team will contact you shortly.

</p>


<input

name="name"

type="text"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

required

/>


<input

name="email"

type="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

required

/>


<input

name="phone"

type="tel"

placeholder="Phone Number"

value={form.phone}

onChange={handleChange}

required

/>


<select

name="interest"

value={form.interest}

onChange={handleChange}

required

>

<option value="">
Area Of Interest
</option>

<option>
Education
</option>

<option>
Health
</option>

<option>
Community Support
</option>

<option>
Youth Empowerment
</option>

<option>
Child Protection
</option>

</select>


<textarea

rows="6"

name="message"

placeholder="Tell us why you want to volunteer"

value={form.message}

onChange={handleChange}

/>


<button>

SIGN UP

</button>

</motion.form>



<motion.div

className="volunteer-contact"

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

Need To Communicate?

</h2>

<div className="contact-card">

<h3>Email</h3>

<p>

<a href="mailto:ssonefamilyfoundation1@gmail.com">

ssonefamilyfoundation1@gmail.com

</a>

</p>

</div>


<div className="contact-card">

<h3>Phone</h3>

<p>

<a href="tel:+256746340871">

+256 746 340 871

</a>

</p>

</div>


<div className="contact-card">

<h3>WhatsApp</h3>

<p>

<a
href="https://wa.me/256756478200"
target="_blank"
rel="noopener noreferrer"
>

+256 756 478 200

</a>

</p>

</div>

</motion.div>



</div>

</div>

</div>
<Footer />

</>
)

}