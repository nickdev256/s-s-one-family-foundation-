import "./DonationsAdmin.css"

import {

FaSearch,
FaCheck,
FaTimes,
FaDonate,
FaMoneyBillWave

}

from "react-icons/fa"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"



export default function Donations(){

const [

search,
setSearch

]=useState("")


const [

donations,
setDonations

]=useState([

{

id:1,

name:"John Doe",

amount:"UGX 250,000",

type:"Monthly",

status:"Pending"

},

{

id:2,

name:"Sarah",

amount:"UGX 1,200,000",

type:"One Time",

status:"Approved"

},

{

id:3,

name:"David",

amount:"UGX 500,000",

type:"Monthly",

status:"Pending"

}

])



function approve(id){

setDonations(

donations.map(item=>

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

setDonations(

donations.map(item=>

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

donations.filter(item=>

item.name

.toLowerCase()

.includes(

search.toLowerCase()

)

)



return(

<AdminLayout>

<div className="donations">


<div className="page-header">

<div>

<h1>

Donations

</h1>

<p>

Manage donor transactions

</p>

</div>

</div>



{/* STATS */}

<div className="donation-stats">

<div className="stat">

<FaDonate/>

<div>

<h3>

UGX 1.95M

</h3>

<p>

Total Received

</p>

</div>

</div>



<div className="stat">

<FaMoneyBillWave/>

<div>

<h3>

{donations.length}

</h3>

<p>

Total Donations

</p>

</div>

</div>

</div>



{/* SEARCH */}

<div className="search-box">

<FaSearch/>

<input

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

placeholder="Search donor"

/>

</div>



{/* TABLE */}

<div className="table-card">

<table className="admin-table">

<thead>

<tr>

<th>

Donor

</th>

<th>

Amount

</th>

<th>

Type

</th>

<th>

Status

</th>

<th>

Actions

</th>

</tr>

</thead>



<tbody>

{

filtered.map(item=>(

<tr
key={item.id}
>

<td>

{item.name}

</td>

<td>

{item.amount}

</td>

<td>

{item.type}

</td>

<td>

<span

className={

item.status
.toLowerCase()

}

>

{item.status}

</span>

</td>

<td>

<div className="actions">

<button

className="approve"

onClick={()=>

approve(
item.id
)

}

>

<FaCheck/>

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

</button>

</div>

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</AdminLayout>

)

}