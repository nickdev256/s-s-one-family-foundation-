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

const programs=[

{
id:"education",
icon:<FaGraduationCap/>,
title:"Education & Skills Development",

description:
"Improving access to quality education through scholarships, school support, vocational and technical training, literacy programs, apprenticeship opportunities and practical life skills that prepare underprivileged children and youth for employment and self-reliance."
},

{
id:"health",
icon:<FaHeartbeat/>,
title:"Health & Community Care",

description:
"Supporting access to healthcare services, psychosocial care, reproductive health education, HIV/AIDS awareness, prenatal care, family planning, sanitation initiatives and community-based health programs that restore dignity and wellbeing."
},

{
id:"child",
icon:<FaChild/>,
title:"Child Protection",

description:
"Protecting children from abuse, exploitation, neglect and harmful practices while promoting child rights, rehabilitation, counseling, safe spaces and long-term support for vulnerable and orphaned children."
},

{
id:"youth",
icon:<FaUsers/>,
title:"Youth Empowerment",

description:
"Equipping young people with leadership skills, citizenship values, entrepreneurship, talent development, volunteer opportunities and mentorship programs that enable meaningful participation in society."
},

{
id:"gender",
icon:<FaFemale/>,
title:"Women Empowerment",

description:
"Empowering women and girls through education, life skills, technical training, self-esteem development, reproductive health information, economic opportunities and advocacy against gender-based violence."
},

{
id:"humanitarian",
icon:<FaHandsHelping/>,
title:"Humanitarian Support",

description:
"Providing relief assistance, social protection, emergency support, care services and sustainable interventions for vulnerable families, refugees, single mothers, widows, elderly persons and disadvantaged communities."
},

{
id:"agriculture",
icon:<FaSeedling/>,
title:"Agriculture & Livelihoods",

description:
"Promoting agriculture, vocational farming, food security and income-generating projects while creating opportunities for communities to build sustainable livelihoods and economic independence."
},

{
id:"environment",
icon:<FaLeaf/>,
title:"Environmental Sustainability",

description:
"Driving environmental rehabilitation, climate awareness, solid waste management, conservation activities and youth participation in sustainable environmental protection initiatives."
},

{
id:"employment",
icon:<FaBriefcase/>,
title:"Employment & Entrepreneurship",

description:
"Creating employment pathways through business training, entrepreneurship support, skills development, financial literacy, savings culture and youth-led enterprise opportunities."
},

{
id:"community",
icon:<FaHome/>,
title:"Community Development",

description:
"Strengthening communities through advocacy, capacity building, social action, infrastructure support, establishment of schools and training centers, water access and sustainable development initiatives."

}

]

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