import "./VolunteerPage.css"
import { useState } from "react"

export default function VolunteerPage(){

const [form,setForm]=useState({

name:"",
email:"",
phone:"",
interest:"",
message:""

})

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

})

}

const handleSubmit=(e)=>{

e.preventDefault()

alert("Thank you for signing up as a volunteer!")

}



return(

<div className="volunteer-page">

<div className="volunteer-overlay"></div>

<div className="volunteer-container">

<div className="volunteer-header">

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

</div>



<div className="volunteer-content">



<form
className="volunteer-form"

onSubmit={handleSubmit}
>

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

</form>



<div className="volunteer-contact">

<h2>

Need To Communicate?

</h2>

<div className="contact-card">

<h3>Email</h3>

<p>

ssonefamilyfoundation1@gmail.com

</p>

</div>


<div className="contact-card">

<h3>Phone</h3>

<p>

+256 74634871

</p>

</div>


<div className="contact-card">

<h3>WhatsApp</h3>

<p>

+256 756478200

</p>

</div>

</div>



</div>

</div>

</div>

)

}