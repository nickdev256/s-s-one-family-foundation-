import "./PartnerPage.css"

import {
FaHandshake,
FaGlobeAfrica,
FaUsers,
FaHeart,
FaSeedling,
FaArrowRight
}

from "react-icons/fa"

import { Link } from "react-router-dom"

export default function PartnerPage(){

const partnerships=[

{
icon:<FaHeart/>,
title:"Corporate Partnerships",
text:
"Collaborate with us through sponsorship, CSR initiatives and community impact programs."
},

{
icon:<FaUsers/>,
title:"Community Partnerships",
text:
"Join local efforts that strengthen vulnerable communities and empower families."
},

{
icon:<FaSeedling/>,
title:"Development Partnerships",
text:
"Work together on sustainable projects that create long term social transformation."
},

{
icon:<FaGlobeAfrica/>,
title:"Global Partnerships",
text:
"Build international collaborations that expand opportunity and create measurable impact."
}

]

return(

<div className="partner-page">


{/* HERO */}

<section className="partner-hero">

<div className="partner-overlay"></div>

<div className="partner-content">

<span>

PARTNER WITH US

</span>

<h1>

Together We Create Greater Impact

</h1>

<p>

Join S&S One Family Foundation in transforming lives,
building resilient communities and creating lasting change.

</p>

<Link
to="/contact"
className="partner-btn"
>

LET’S PARTNER

</Link>

</div>

</section>



{/* WHY */}

<section className="why-partner">

<h1>

Why Partner With Us

</h1>

<p>

We believe sustainable transformation happens
through collaboration, innovation and shared action.

</p>

</section>



{/* PARTNERS */}

<section className="partner-grid">

{

partnerships.map((item,index)=>(

<div
key={index}
className="partner-card"
>

<div className="partner-icon">

{item.icon}

</div>

<h2>

{item.title}

</h2>

<p>

{item.text}

</p>

<button>

Explore

<FaArrowRight/>

</button>

</div>

))

}

</section>



{/* IMPACT */}

<section className="partner-impact">

<h1>

What Partnership Creates

</h1>

<div className="impact-row">

<div>

<h2>

Education

</h2>

<p>

Expanding access to learning and skills.

</p>

</div>

<div>

<h2>

Health

</h2>

<p>

Supporting healthier communities.

</p>

</div>

<div>

<h2>

Empowerment

</h2>

<p>

Creating opportunity and independence.

</p>

</div>

</div>

</section>



{/* CTA */}

<section className="partner-cta">

<FaHandshake/>

<h1>

Become A Partner Today

</h1>

<p>

Together we can multiply impact and transform communities.

</p>

<Link
to="/contact"
>

<button>

START PARTNERSHIP

</button>

</Link>

</section>

</div>

)

}