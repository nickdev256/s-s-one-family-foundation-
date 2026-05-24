import './Hero.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ScrollIndicator from '../components/ScrollIndicator'

import img1 from "../assets/image/image(367).png"
import img2 from "../assets/image/image(373).png"
import img3 from "../assets/image/image(369).png"
import img4 from "../assets/image/image(370).png"
import img5 from "../assets/image/image(371).png"
import img6 from "../assets/image/image(372).png"

export default function Hero(){

const galleryImages=[

{
image:img1,
title:'Breaking The Cycle Of Poverty',
description:
'Thousands of vulnerable families continue to struggle with hunger, displacement and lack of basic needs.'
},

{
image:img2,
title:'Women Need Support & Protection',
description:
'Many mothers and elderly women struggle daily to care for children without stable income or healthcare.'
},

{
image:img3,
title:'Children Deserve A Better Future',
description:
'Education, protection and nutrition can transform the future of vulnerable children.'
},

{
image:img4,
title:'Education Creates Hope',
description:
'Children need safe learning environments and opportunities to build a brighter future.'
},

{
image:img5,
title:'Protect Vulnerable Families',
description:
'Together we can support struggling mothers and children facing poverty and hardship.'
},

{
image:img6,
title:'Food Relief Restores Hope',
description:
'Nutritious meals and humanitarian support can save lives and restore dignity.'
}

]

const [current,setCurrent]=useState(0)

useEffect(()=>{

const slider=setInterval(()=>{

setCurrent(prev=>

prev===galleryImages.length-1
?0
:prev+1

)

},5000)

return()=>clearInterval(slider)

},[])

return(

<section className="hero">

<motion.div

className="hero-visuals"

key={current}

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1.2
}}

>

<div className="hero-main-image">

<div className="image-overlay"/>

<img
src={galleryImages[current].image}
alt={galleryImages[current].title}
/>


<div className="hero-story-card">

<span>

S&S ONE FAMILY FOUNDATION

</span>

<h3>

{galleryImages[current].title}

</h3>

<p>

{galleryImages[current].description}

</p>


<div className="hero-cta">

<button className="hero-primary-btn">

Donate

</button>

<button className="hero-secondary-btn">

Sponsor

</button>

</div>

</div>

</div>

</motion.div>

<ScrollIndicator/>

</section>

)

}