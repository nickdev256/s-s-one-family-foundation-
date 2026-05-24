import './Programs.css'

import {
FaBookOpen,
FaHandsHelping,
FaHeartbeat,
FaLeaf,
FaUsers,
FaChild
}

from 'react-icons/fa'

import { motion } from 'framer-motion'

import bg from "../assets/image/image(373).png"

export default function Programs(){

const programs=[

{
icon:<FaChild/>,
title:'Child Support',
description:
'Providing vulnerable children with protection, food assistance, mentorship, psychosocial support and opportunities to grow in safe and loving environments.'
},

{
icon:<FaBookOpen/>,
title:'Education Support',
description:
'Supporting access to quality education through sponsorships, school materials, tuition support, digital learning and academic mentorship.'
},

{
icon:<FaHandsHelping/>,
title:'Community Outreach',
description:
'Delivering humanitarian aid, family empowerment initiatives, community engagement and emergency response programs.'
},

{
icon:<FaHeartbeat/>,
title:'Health Support',
description:
'Improving healthcare access through medical camps, health awareness, maternal support and wellbeing initiatives.'
},

{
icon:<FaUsers/>,
title:'Youth Empowerment',
description:
'Equipping young people with leadership skills, entrepreneurship training, vocational opportunities and life mentorship.'
},

{
icon:<FaLeaf/>,
title:'Environmental Sustainability',
description:
'Promoting environmental conservation, tree planting, clean water initiatives and sustainable community development.'
}

]

return(

<section

className="programs"

id="programs"

>

<img
src={bg}
alt=""
className="program-bg"
/>

<div className="overlay"/>

<div className="programs-container">

<div className="programs-header">

<span>

OUR PROGRAMS

</span>

<h1>

Transforming
Communities
Through Action

</h1>

<p>

Creating sustainable impact by empowering children,
strengthening families and building resilient communities
through education, healthcare, humanitarian support
and long-term development.

</p>

</div>



<div className="program-grid">

{

programs.map((program,index)=>(

<motion.div

key={index}

className="program-card"

initial={{
opacity:0,
y:120
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

whileHover={{
y:-12
}}

>

<div className="program-icon">

{program.icon}

</div>

<h2>

{program.title}

</h2>

<p>

{program.description}

</p>

<button>

Explore

</button>

</motion.div>

))

}

</div>

</div>

</section>

)

}