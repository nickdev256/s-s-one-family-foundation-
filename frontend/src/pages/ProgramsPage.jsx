import "./ProgramsPage.css"

import {

FaGraduationCap,
FaHeartbeat,
FaHandsHelping,
FaSeedling,
FaUsers,
FaFemale,
FaLeaf,
FaBriefcase,
FaChild,
FaHome

}

from "react-icons/fa"

export default function ProgramsPage(){

const programs = [

{
id:"child-education",
icon:<FaChild/>,
title:"Child & Education Support",
description:
"Supporting vulnerable children through protection, sponsorships, school fees, scholastic materials, mentorship, digital learning, life skills development and access to quality education that empowers them to reach their full potential."
},

{
id:"health",
icon:<FaHeartbeat/>,
title:"Healthcare & Community Wellness",
description:
"Improving access to healthcare services, medical outreach programs, reproductive health education, psychosocial support, sanitation initiatives and community health interventions that promote healthier lives."
},

{
id:"agriculture",
icon:<FaSeedling/>,
title:"Agriculture & Food Security",
description:
"Promoting modern agriculture, sustainable farming practices, food security initiatives, vocational farming skills and income-generating agricultural projects that strengthen livelihoods and reduce poverty."
},

{
id:"women",
icon:<FaFemale/>,
title:"Women & Girls Empowerment",
description:
"Empowering women and girls through education, entrepreneurship, vocational training, leadership development, economic opportunities and advocacy programs that promote gender equality and self-reliance."
},

{
id:"youth",
icon:<FaUsers/>,
title:"Youth Empowerment & Talent Development",
description:
"Equipping young people with leadership skills, entrepreneurship training, sports, arts, music, innovation and talent development opportunities that nurture future leaders and productive citizens."
},

{
id:"skills",
icon:<FaBriefcase/>,
title:"Skills Development & Employment",
description:
"Providing vocational training, technical education, apprenticeship opportunities, business development support and employment pathways that prepare individuals for sustainable careers and economic independence."
},

{
id:"tourism",
icon:<FaLeaf/>,
title:"Environmental Sustainability & Tourism",
description:
"Promoting environmental conservation, tree planting, clean water initiatives, eco-tourism, cultural tourism and sustainable development practices that protect natural resources while creating community opportunities."
},

{
id:"housing",
icon:<FaHome/>,
title:"Housing & Community Development",
description:
"Supporting vulnerable families through housing initiatives, community infrastructure development, access to clean water, sanitation facilities and sustainable projects that improve living conditions."
},

{
id:"humanitarian",
icon:<FaHandsHelping/>,
title:"Humanitarian & Social Support",
description:
"Providing emergency relief, social protection, food assistance, care services and support for vulnerable families, refugees, elderly persons, widows and disadvantaged communities."
}

];


return(

<section

className="programs-page"

id="programs"

>

{/* HERO */}

<div className="programs-header">

<span>

OUR PROGRAMS

</span>

<h1>

Transforming Lives Through Action

</h1>

<p>

S&S One Family Foundation
implements programs that
empower children, youth,
women and vulnerable
communities through
education, health,
humanitarian support and
sustainable development.

</p>

</div>



{/* PROGRAMS */}

<div className="programs-grid">

{

programs.map((program,index)=>(

<section

key={index}

id={program.id}

className="program-card"

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

</section>

))

}

</div>

</section>

)

}