import "./Volunteers.css"

import {

FaSearch,
FaCheck,
FaTimes,
FaEye,
FaUsers,
FaUserCheck

}

from "react-icons/fa"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"



export default function Volunteers(){

const [

search,
setSearch

]=useState("")



const [

volunteers,
setVolunteers

]=useState([

{

id:1,

name:"Sarah Namuli",

email:"sarah@gmail.com",

program:"Education",

status:"Pending"

},

{

id:2,

name:"David Musa",

email:"david@gmail.com",

program:"Youth",

status:"Approved"

},

{

id:3,

name:"Jane Amina",

email:"jane@gmail.com",

program:"Health",

status:"Pending"

}

])



function approve(id){

setVolunteers(

volunteers.map(item=>

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

setVolunteers(

volunteers.map(item=>

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



function view(item){

alert(

`${item.name}

${item.email}

Program: ${item.program}

Status: ${item.status}`

)

}



const filtered=

volunteers.filter(item=>

item.name

.toLowerCase()

.includes(

search.toLowerCase()

)

)



return(

<AdminLayout>

<div className="volunteers-page">


<div className="page-header">

<div>

<span>

VOLUNTEER MANAGEMENT

</span>

<h1>

Volunteer Applications

</h1>

<p>

Review and manage volunteer requests.

</p>

</div>

</div>



<div className="stats">

<div className="stat">

<FaUsers/>

<div>

<h3>

{volunteers.length}

</h3>

<p>

Applications

</p>

</div>

</div>



<div className="stat">

<FaUserCheck/>

<div>

<h3>

{

volunteers.filter(

v=>

v.status==="Approved"

).length

}

</h3>

<p>

Approved

</p>

</div>

</div>

</div>



<div className="search-box">

<FaSearch/>

<input

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

placeholder="Search volunteer"

/>

</div>



<div className="table-card">

<table className="admin-table">

<thead>

<tr>

<th>

Name

</th>

<th>

Email

</th>

<th>

Program

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

{item.email}

</td>

<td>

{item.program}

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

className="view"

onClick={()=>

view(
item
)

}

>

<FaEye/>

</button>



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