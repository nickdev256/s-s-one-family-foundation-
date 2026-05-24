import "./Dashboard.css"

import AdminLayout from "../layout/AdminLayout"

import {

FaDonate,
FaUsers,
FaHandshake,
FaEnvelope,
FaArrowUp,
FaCalendarAlt,
FaBell,
FaImages,
FaArrowRight,
FaChartLine,
FaUserFriends

}

from "react-icons/fa"

export default function Dashboard(){

const cards=[

{
title:"Total Donations",
value:"UGX 25M",
growth:"+12%",
icon:<FaDonate/>
},

{
title:"Volunteers",
value:"286",
growth:"+24",
icon:<FaUsers/>
},

{
title:"Partners",
value:"18",
growth:"+4",
icon:<FaHandshake/>
},

{
title:"Messages",
value:"124",
growth:"+8",
icon:<FaEnvelope/>
}

]

const activity=[

{
title:"New volunteer application",
time:"5 mins ago"
},

{
title:"Donation received",
time:"18 mins ago"
},

{
title:"Gallery updated",
time:"45 mins ago"
},

{
title:"New partner request",
time:"1 hour ago"
}

]

return(

<AdminLayout>

<div className="dashboard">


{/* HEADER */}

<div className="dashboard-header">

<div>

<span>

ADMIN PANEL

</span>

<h1>

Welcome Back 👋

</h1>

<p>

Manage S&S One Family Foundation
from one dashboard.

</p>

</div>



<div className="dashboard-actions">

<button>

<FaBell/>

Notifications

</button>

<button>

<FaCalendarAlt/>

Schedule

</button>

</div>

</div>



{/* STATS */}

<div className="admin-grid">

{

cards.map((card,index)=>(

<div
key={index}
className="admin-card"
>

<div className="card-top">

<div className="card-icon">

{card.icon}

</div>

<div className="growth">

<FaArrowUp/>

{card.growth}

</div>

</div>

<h2>

{card.value}

</h2>

<p>

{card.title}

</p>

</div>

))

}

</div>



{/* LOWER */}

<div className="dashboard-lower">


{/* ACTIVITY */}

<div className="activity">

<div className="section-header">

<h2>

Recent Activity

</h2>

<button>

View All

<FaArrowRight/>

</button>

</div>



{

activity.map((item,index)=>(

<div

key={index}

className="activity-item"

>

<div className="dot"/>

<div>

<h4>

{item.title}

</h4>

<span>

{item.time}

</span>

</div>

</div>

))

}

</div>



{/* RIGHT */}

<div className="side-area">


<div className="quick-actions">

<h2>

Quick Actions

</h2>

<button>

<FaDonate/>

View Donations

</button>

<button>

<FaUserFriends/>

Manage Volunteers

</button>

<button>

<FaImages/>

Open Gallery

</button>

</div>



<div className="mini-card">

<div className="mini-icon">

<FaChartLine/>

</div>

<h3>

Performance

</h3>

<p>

Monthly impact has increased
by 24%.

</p>

</div>

</div>

</div>

</div>

</AdminLayout>

)

}