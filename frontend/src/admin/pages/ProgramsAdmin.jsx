import "./ProgramsAdmin.css"

import {

FaSearch,
FaEdit,
FaTrash,
FaPlus,
FaBook,
FaHeartbeat,
FaUsers

}

from "react-icons/fa"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"



export default function ProgramsAdmin(){

const [

search,
setSearch

]=useState("")



const [

programs,
setPrograms

]=useState([

{

id:1,

title:"Education",

icon:<FaBook/>,

status:"Active"

},

{

id:2,

title:"Health",

icon:<FaHeartbeat/>,

status:"Active"

},

{

id:3,

title:"Youth Empowerment",

icon:<FaUsers/>,

status:"Draft"

}

])



function remove(id){

setPrograms(

programs.filter(

item=>

item.id!==id

)

)

}



const filtered=

programs.filter(item=>

item.title

.toLowerCase()

.includes(

search.toLowerCase()

)

)



return(

<AdminLayout>

<div className="programs-admin">


<div className="page-header">

<div>

<span>

PROGRAM MANAGEMENT

</span>

<h1>

Programs Admin

</h1>

<p>

Manage NGO programs
and website sections.

</p>

</div>



<button className="add-program">

<FaPlus/>

Add Program

</button>

</div>



<div className="program-search">

<FaSearch/>

<input

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

placeholder="Search Program"

/>

</div>



<div className="program-grid">

{

filtered.map(item=>(

<div

key={item.id}

className="program-card"

>

<div className="program-icon">

{item.icon}

</div>



<h2>

{item.title}

</h2>



<span

className={

item.status
.toLowerCase()

}

>

{item.status}

</span>



<div className="program-actions">

<button
className="edit"
>

<FaEdit/>

Edit

</button>



<button

className="delete"

onClick={()=>

remove(
item.id
)

}

>

<FaTrash/>

Delete

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