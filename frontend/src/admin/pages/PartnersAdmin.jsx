import "./PartnersAdmin.css"

import {

FaHandshake,
FaSearch,
FaCheck,
FaTimes,
FaBuilding

}

from "react-icons/fa"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"



export default function PartnersAdmin(){

const [

search,
setSearch

]=useState("")



const [

partners,
setPartners

]=useState([

{

id:1,

organization:"Hope Foundation",

contact:"Sarah"

,

type:"Education",

status:"Pending"

},

{

id:2,

organization:"Global Care",

contact:"John",

type:"Healthcare",

status:"Approved"

},

{

id:3,

organization:"Future Youth",

contact:"David",

type:"Community",

status:"Pending"

}

])



function approve(id){

setPartners(

partners.map(item=>

item.id===id

?

{

...item,

status:"Approved"

}

:

item

)

)

}



function reject(id){

setPartners(

partners.map(item=>

item.id===id

?

{

...item,

status:"Rejected"

}

:

item

)

)

}



const filtered=

partners.filter(item=>

item.organization

.toLowerCase()

.includes(

search.toLowerCase()

)

)



return(

<AdminLayout>

<div className="partners-page">


<div className="page-header">

<div>

<span>

PARTNERSHIPS

</span>

<h1>

Partner Requests

</h1>

<p>

Manage NGO partnership requests
and collaborations.

</p>

</div>



<div className="partner-total">

<FaHandshake/>

{partners.length}

</div>

</div>



<div className="partner-search">

<FaSearch/>

<input

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

placeholder="Search partner"

/>

</div>



<div className="partners-grid">

{

filtered.map(item=>(

<div

key={item.id}

className="partner-card"

>

<div className="partner-icon">

<FaBuilding/>

</div>



<h2>

{item.organization}

</h2>



<h4>

{item.contact}

</h4>



<p>

{item.type}

</p>



<span

className={

item.status
.toLowerCase()

}

>

{item.status}

</span>



<div className="partner-actions">

<button

className="approve"

onClick={()=>

approve(
item.id
)

}

>

<FaCheck/>

Approve

</button>



<button

className="reject"

onClick={()=>

reject(
item.id
)

}

>

<FaTimes/>

Reject

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