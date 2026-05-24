import "./TeamPage.css"

import { motion } from "framer-motion"

import {
FaHeart,
FaHandsHelping,
FaUsers,
FaBullseye
}

from "react-icons/fa"

import hero from "../assets/image/image(374).png"

export default function TeamPage(){

const team=[

{
name:"Founder",
role:"Executive Director",
desc:
"Providing leadership and vision for sustainable community transformation."
},

{
name:"Programs Lead",
role:"Programs Coordinator",
desc:
"Managing impact projects and ensuring successful implementation."
},

{
name:"Operations Lead",
role:"Administration",
desc:
"Supporting organizational growth and operational excellence."
},

{
name:"Partnership Lead",
role:"Community Relations",
desc:
"Building meaningful partnerships and long term impact."
}

]

const values=[

{
icon:<FaHeart/>,
name:"Compassion"
},

{
icon:<FaHandsHelping/>,
name:"Service"
},

{
icon:<FaUsers/>,
name:"Community"
},

{
icon:<FaBullseye/>,
name:"Impact"
}

]

return(

<div className="team-page">


<section

className="team-hero"

style={{

backgroundImage:

`linear-gradient(
rgba(10,18,28,.55),
rgba(10,18,28,.75)
),

url(${hero})`

}}

>

<div className="team-hero-content">

<h1>

Meet Our Team

</h1>

<p>

Passionate people creating
hope and transforming lives.

</p>

</div>

</section>



<section className="team-grid">

{

team.map((member,index)=>(

<motion.div

key={index}

className="team-card"

initial={{

opacity:0,

y:index%2===0

?

-100

:

100

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:true

}}

transition={{

duration:1

}}

>

<div className="team-image"></div>

<div className="team-info">

<h2>

{member.name}

</h2>

<h3>

{member.role}

</h3>

<p>

{member.desc}

</p>

</div>

</motion.div>

))

}

</section>



<section className="team-values">

<h1>

Our Values

</h1>

<div className="value-grid">

{

values.map((v,index)=>(

<div

key={index}

className="value"

>

<div>

{v.icon}

</div>

<h2>

{v.name}

</h2>

</div>

))

}

</div>

</section>

</div>

)

}