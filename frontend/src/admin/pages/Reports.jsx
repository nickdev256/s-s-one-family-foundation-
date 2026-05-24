import "./Reports.css"

import AdminLayout from "../layout/AdminLayout"

import {

FaDonate,
FaUsers,
FaBook,
FaHandshake,
FaDownload,
FaChartBar

}

from "react-icons/fa"



export default function Reports(){

const reports=[

{

title:"Donations Report",

icon:<FaDonate/>,

total:"UGX 25M",

progress:"82%"

},

{

title:"Volunteer Report",

icon:<FaUsers/>,

total:"286",

progress:"71%"

},

{

title:"Programs Report",

icon:<FaBook/>,

total:"12",

progress:"89%"

},

{

title:"Partnership Report",

icon:<FaHandshake/>,

total:"18",

progress:"64%"

}

]

return(

<AdminLayout>

<div className="reports-page">


<div className="reports-header">

<span>

REPORT CENTER

</span>

<h1>

Reports Dashboard

</h1>

<p>

Track NGO performance,
export records and monitor growth.

</p>

</div>



<div className="report-grid">

{

reports.map((report,index)=>(

<div

key={index}

className="report-card"

>

<div className="report-icon">

{report.icon}

</div>



<h2>

{report.title}

</h2>



<h3>

{report.total}

</h3>



<div className="progress">

<div

style={{

width:

report.progress

}}

>

</div>

</div>



<span>

Completion

{report.progress}

</span>



<div className="report-actions">

<button>

<FaChartBar/>

Generate

</button>



<button>

<FaDownload/>

Download

</button>

</div>

</div>

))

}

</div>

</div>

</AdminLayout>

)

}