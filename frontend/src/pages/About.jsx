import "./About.css"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {

FaBullseye,
FaEye,
FaHeart,
FaUsers,
FaHandsHelping,
FaLeaf,
FaGlobe,
FaChild,
FaSeedling,
FaBriefcase

}

from "react-icons/fa"

export default function About(){

const values=[

{
icon:<FaHeart/>,
title:"Compassion",
text:"Serving communities with love, dignity and care."
},

{
icon:<FaHandsHelping/>,
title:"Integrity",
text:"Promoting accountability and responsible leadership."
},

{
icon:<FaUsers/>,
title:"Empowerment",
text:"Creating opportunities and building self reliance."
},

{
icon:<FaLeaf/>,
title:"Sustainability",
text:"Building lasting community transformation."
}

]

const impact=[

{
icon:<FaChild/>,
title:"Children & Youth"
},

{
icon:<FaSeedling/>,
title:"Agriculture"
},

{
icon:<FaGlobe/>,
title:"Environment"
},

{
icon:<FaBriefcase/>,
title:"Employment"
},

{
icon:<FaHeart/>,
title:"Healthcare"
},

{
icon:<FaUsers/>,
title:"Humanitarian Support"
}

]

const serve=[

{

title:"Children",

message:
"Providing protection, education, hope and opportunities for vulnerable children."

},

{

title:"Youth",

message:
"Equipping young people with skills, leadership and pathways to a better future."

},

{

title:"Women",

message:
"Empowering women through economic opportunities and community support."

},

{

title:"Single Mothers",

message:
"Supporting mothers with resources, resilience and sustainable livelihoods."

},

{

title:"Orphans",

message:
"Creating safe environments and restoring dignity through care and support."

},

{

title:"Refugees",

message:
"Helping displaced families rebuild their lives with hope and opportunity."

},

{

title:"Persons With Disabilities",

message:
"Promoting inclusion, accessibility and equal opportunities for all."

},

{

title:"Elderly",

message:
"Providing care, companionship and dignity for senior members of society."

}

]

return(

<section
className="about-section"
>

{/* HERO */}

<motion.div

className="about-header"

initial={{
opacity:0,
y:100
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1.2
}}

>

<span>

ABOUT US

</span>

<h1>

Restoring Hope.
Building Futures.

</h1>

<p>

S&S One Family Foundation
exists to transform lives
through education,
humanitarian support,
health and empowerment.

</p>

</motion.div>



{/* STORY */}

<motion.section

className="story"

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

transition={{
duration:1
}}

>

<h1>

Our Story

</h1>

<p>

Founded to promote social
transformation and improve
quality of life among
vulnerable communities.

</p>

</motion.section>



{/* MISSION VISION */}

<div className="mv-grid">

{

[

{

icon:<FaBullseye/>,

title:"Mission",

text:
"Create social transformation through education and humanitarian programs."

},

{

icon:<FaEye/>,

title:"Vision",

text:
"A transformed society where every family has hope."

}

]

.map((item,index)=>(

<motion.div

key={index}

className="mv-card"

initial={{
opacity:0,
y:-220
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:1,
delay:index*.3
}}

>

{item.icon}

<h2>

{item.title}

</h2>

<p>

{item.text}

</p>

</motion.div>

))

}

</div>



{/* VALUES */}

<section>

<h1>

Core Values

</h1>

<div className="values-grid">

{

values.map((v,index)=>(

<motion.div

key={index}

className="value-card"

initial={{
opacity:0,
y:-260
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:1,
delay:index*.15
}}

>

<div>

{v.icon}

</div>

<h2>

{v.title}

</h2>

<p>

{v.text}

</p>

</motion.div>

))

}

</div>

</section>



{/* IMPACT */}

<section>

<h1>

Areas Of Impact

</h1>

<div className="impact-grid">

{

impact.map((i,index)=>(

<motion.div

key={index}

className="impact-card"

initial={{
opacity:0,
y:220
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:1,
delay:index*.12
}}

>

<div>

{i.icon}

</div>

<h3>

{i.title}

</h3>

</motion.div>

))

}

</div>

</section>



{/* SERVE */}

<section>

<h1>

Who We Serve

</h1>

<div className="serve-grid">

{
serve.map((item,index)=>(

<motion.div

key={index}

className="serve-card"

initial={{
opacity:0,
x:index%2===0?-180:180
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:index*.08
}}

>

<h2>

{item.title}

</h2>

<p>

{item.message}

</p>

</motion.div>

))
}

</div>

</section>



{/* APPROACH */}

<section>

<h1>

Our Approach

</h1>

<div className="steps">

{

["Identify","Empower","Support","Transform"]

.map((step,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
scale:.5,
y:120
}}

whileInView={{
opacity:1,
scale:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:index*.2
}}

>

0{index+1}

<p>

{step}

</p>

</motion.div>

))

}

</div>

</section>



<motion.section

className="about-cta"

initial={{
opacity:0,
y:120
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

<h1>

Become Part Of The Change

</h1>

<p>

Volunteer.
Partner.
Donate.

</p>

<Link

to="/contact"

className="cta-link"

>

<button>

Join Us

</button>

</Link>

</motion.section>

</section>

)

}