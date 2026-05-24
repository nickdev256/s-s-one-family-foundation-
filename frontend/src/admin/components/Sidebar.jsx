import "./Sidebar.css"

import {

FaTachometerAlt,
FaDonate,
FaUsers,
FaHandshake,
FaImages,
FaEnvelope,
FaCog,
FaSignOutAlt,
FaFileAlt,
FaEdit,
FaChevronRight,
FaLayerGroup,
FaUserTie

}

from "react-icons/fa"

import {

NavLink

}

from "react-router-dom"



export default function Sidebar(){

const menus=[

{
name:"Dashboard",
path:"/admin/dashboard",
icon:<FaTachometerAlt/>
},

{
name:"Donations",
path:"/admin/donations",
icon:<FaDonate/>
},

{
name:"Volunteers",
path:"/admin/volunteers",
icon:<FaUsers/>
},

{
name:"Programs",
path:"/admin/programs",
icon:<FaLayerGroup/>
},

{
name:"Partners",
path:"/admin/partners",
icon:<FaHandshake/>
},

{
name:"Team",
path:"/admin/team",
icon:<FaUserTie/>
},

{
name:"Gallery",
path:"/admin/gallery",
icon:<FaImages/>
},

{
name:"Messages",
path:"/admin/messages",
icon:<FaEnvelope/>
},

{
name:"Website CMS",
path:"/admin/cms",
icon:<FaEdit/>
},

{
name:"Reports",
path:"/admin/reports",
icon:<FaFileAlt/>
},

{
name:"Settings",
path:"/admin/settings",
icon:<FaCog/>
}

]

return(

<aside className="sidebar">


<div className="sidebar-top">

<div className="brand-mark">

S&S

</div>

<div className="brand-text">

<h1>

S&S Admin

</h1>

<p>

Foundation Control Center

</p>

</div>

</div>



<nav className="sidebar-menu">

{

menus.map((item,index)=>(

<NavLink

key={index}

to={item.path}

className={({isActive})=>

isActive

?

"side-link active"

:

"side-link"

}

>

<div className="side-left">

<div className="side-icon">

{item.icon}

</div>

<span>

{item.name}

</span>

</div>



<FaChevronRight
className="arrow"
/>

</NavLink>

))

}

</nav>



<div className="sidebar-footer">

<NavLink

to="/"

className="logout"

>

<div className="side-left">

<FaSignOutAlt/>

<span>

Exit Dashboard

</span>

</div>

</NavLink>



<div className="version">

v1.0 NGO Admin

</div>

</div>

</aside>

)

}