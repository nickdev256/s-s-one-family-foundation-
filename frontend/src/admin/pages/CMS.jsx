import "./CMS.css"

import AdminLayout from "../layout/AdminLayout"

import { useNavigate } from "react-router-dom"

import {

FaHome,
FaInfoCircle,
FaLayerGroup,
FaUsers,
FaPhone,
FaWindowRestore

}

from "react-icons/fa"



export default function CMS(){

const navigate=useNavigate()

const pages=[

{
title:"Homepage",
icon:<FaHome/>,
route:"/admin/cms/home"
},

{
title:"About Page",
icon:<FaInfoCircle/>,
route:"/admin/cms/about"
},

{
title:"Programs",
icon:<FaLayerGroup/>,
route:"/admin/cms/programs"
},

{
title:"Team",
icon:<FaUsers/>,
route:"/admin/cms/team"
},

{
title:"Contact",
icon:<FaPhone/>,
route:"/admin/cms/contact"
},

{
title:"Footer",
icon:<FaWindowRestore/>,
route:"/admin/cms/footer"
}

]

return(

<AdminLayout>

<div className="cms-page">


<div className="cms-header">

<span>

CONTENT MANAGEMENT

</span>

<h1>

Website CMS

</h1>

<p>

Manage and update website sections
without touching code.

</p>

</div>



<div className="cms-grid">

{

pages.map((page,index)=>(

<button

key={index}

className="cms-card"

onClick={()=>

navigate(
page.route
)

}

>

<div className="cms-icon">

{page.icon}

</div>

<h3>

{page.title}

</h3>

<p>

Open editor

</p>

</button>

))

}

</div>

</div>

</AdminLayout>

)

}