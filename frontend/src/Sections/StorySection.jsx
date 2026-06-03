import './StorySection.css'

import { motion } from 'framer-motion'

import {
FaHandsHelping,
FaChild,
FaHeartbeat,
FaGraduationCap,
FaArrowRight
}

from 'react-icons/fa'

import img1 from "../assets/image/image(367).png"
import img2 from "../assets/image/image(368).png"
import img3 from "../assets/image/image(369).png"
import img4 from "../assets/image/image(370).png"

export default function StorySection(){

const services=[

{
icon:<FaHeartbeat/>,
title:'Healthy Food',
text:'Nutritious food support for families.'
},

{
icon:<FaGraduationCap/>,
title:'Education',
text:'Access to quality education.'
},

{
icon:<FaHandsHelping/>,
title:'Pure Water',
text:'Clean and safe water solutions.'
},

{
icon:<FaChild/>,
title:'Medical',
text:'Healthcare and protection.'
}

]

return(

<section className="story-section">

<div className="story-wrapper">

{/* TOP SERVICES */}

<div className="mini-services">

{

services.map((item,index)=>(

<motion.div

key={index}

className="mini-card"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.12
}}

>

<div className="mini-icon">

{item.icon}

</div>

<h4>

{item.title}

</h4>

<p>

{item.text}

</p>

</motion.div>

))

}

</div>


<div className="story-grid">

{/* COLLAGE */}

<motion.div

className="collage"

initial={{
opacity:0,
x:-100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

>

<div className="paint paint-top"/>

<div className="paint paint-bottom"/>

<div className="dots"/>

<img src={img1} className="photo photo1"/>

<img src={img2} className="photo photo2"/>

<img src={img3} className="photo photo3"/>

<img src={img4} className="photo photo4"/>

</motion.div>



{/* CONTENT */}

<motion.div

className="story-text"

initial={{
opacity:0,
x:100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

>

<h2>

Who we are

</h2>


<p>
S&S One Family Foundation is dedicated to creating social transformation through education, agriculture, talent development, housing, tourism, healthcare, and skills development, empowering individuals and communities with opportunities, support, and sustainable solutions that improve lives and build a brighter future for all.
</p>


<div className="stats">

<div>

<h3>

500+

</h3>

<label>

Children Supported

</label>

</div>


<div>

<h3>

30+

</h3>

<label>

Community Programs

</label>

</div>

</div>


<div className="story-actions">

<button className="link-btn">

About Us

<FaArrowRight/>

</button>


<button className="discover-btn">

Discover More

<FaArrowRight/>

</button>

</div>

</motion.div>

</div>

</div>

</section>

)

}