import './Impact.css'

import {
FaGraduationCap,
FaHeartbeat,
FaUsers,
FaHandsHelping
}
from 'react-icons/fa'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Impact(){

const pillars=[

{
icon:<FaGraduationCap/>,
title:'Education',
text:
'Learning opportunities, vocational skills and pathways for long-term growth.'
},

{
icon:<FaHeartbeat/>,
title:'Health',

text:
'Healthcare, protection, psychosocial support and community wellbeing.'
},

{
icon:<FaUsers/>,
title:'Youth Empowerment',

text:
'Building leadership, life skills and opportunities for young people.'
},

{
icon:<FaHandsHelping/>,
title:'Community Impact',

text:
'Sustainable programmes that strengthen families and communities.'
}

]

return(

<section
className="impact-section"
id="impact"
>

{/* HEADER */}

<motion.div

className="impact-left"

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

viewport={{
once:true
}}

>

<span className="impact-tag">

OUR IMPACT

</span>

<h1>

Transforming Lives.

<br/>

Building Communities.

<br/>

Creating Opportunity.

</h1>

<p>

S&S One Family Foundation exists to create lasting social 
transformation by empowering vulnerable children, strengthening 
families and equipping communities through education, health, protection, 
skills development and humanitarian support.

</p>

</motion.div>

{/* IMPACT CONTENT */}

<motion.div

className="impact-right"

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1.1
}}

viewport={{
once:true
}}

>

<div className="impact-visual">

<div className="impact-stats">

{
pillars.map((item,index)=>(

<motion.div

className="impact-card"

key={index}

whileHover={{
y:-10
}}

>

<div className="impact-icon">

{item.icon}

</div>

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

<div className="impact-message">

<h3>

Our Commitment

</h3>

<p>

Every programme is designed to restore dignity, strengthen self-reliance and create sustainable futures for children, youth and vulnerable communities.

</p>

<Link
to="/about"
className="discover-btn"
>

Discover More

</Link>

</div>

</div>

</motion.div>

</section>

)

}