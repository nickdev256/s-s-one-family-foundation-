import "./Donate.css"

import { useState } from "react"

import { Link } from "react-router-dom"

export default function Donation(){

const impacts=[

{
title:"Education",
impact:"Provides school supplies and learning opportunities"
},

{
title:"Food Support",
impact:"Feeds vulnerable families and children"
},

{
title:"Healthcare",
impact:"Supports access to treatment and wellbeing"
},

{
title:"Child Care",
impact:"Provides protection and sponsorship support"
}

]

const [selected,setSelected]=useState(0)

return(

<section className="donation">

<div className="donation-overlay"></div>

<div className="donation-content">

<div className="donation-tag">

MAKE A DIFFERENCE

</div>


<h1 className="donation-title">

Your Support

<br/>

Creates Hope

</h1>


<p className="donation-text">

Every contribution helps us empower
vulnerable children and communities.

</p>



<div className="donation-grid">

{

impacts.map((item,index)=>(

<div

key={index}

className={

selected===index

?

"donation-card active"

:

"donation-card"

}

onClick={()=>

setSelected(index)

}

>

<h2>

{item.title}

</h2>

<p>

{item.impact}

</p>

</div>

))

}

</div>



<div className="selected">

Selected:

<strong>

{
impacts[selected].title
}

</strong>

</div>



<Link

to="/donate"

className="donate-link"

>

<button className="donate-btn">

DONATE NOW

</button>

</Link>

</div>

</section>

)

}