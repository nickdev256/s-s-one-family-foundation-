import "./TeamAdmin.css"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"

import {

FaUsers,
FaSearch,
FaPlus,
FaTrash,
FaEdit,
FaUserTie

}

from "react-icons/fa"



export default function TeamAdmin(){

const [

search,
setSearch

]=useState("")



const [

team,
setTeam

]=useState([

{

id:1,

name:"Sarah Namusoke",

role:"Executive Director",

status:"Active"

},

{

id:2,

name:"John Peter",

role:"Programs Manager",

status:"Active"

},

{

id:3,

name:"David Musa",

role:"Finance Officer",

status:"Inactive"

}

])



function remove(id){

setTeam(

team.filter(

member=>

member.id!==id

)

)

}



const filtered=

team.filter(item=>

item.name

.toLowerCase()

.includes(

search.toLowerCase()

)

)



return(

<AdminLayout>

<div className="team-admin">


<div className="page-header">

<div>

<span>

TEAM MANAGEMENT

</span>

<h1>

Team Admin

</h1>

<p>

Manage leadership and staff profiles.

</p>

</div>



<button className="add-btn">

<FaPlus/>

Add Member

</button>

</div>



<div className="team-search">

<FaSearch/>

<input

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

placeholder="Search team member"

/>

</div>



<div className="team-grid">

{

filtered.map(member=>(

<div

key={member.id}

className="team-card"

>

<div className="member-icon">

<FaUserTie/>

</div>



<h2>

{member.name}

</h2>



<h4>

{member.role}

</h4>



<span

className={

member.status
.toLowerCase()

}

>

{member.status}

</span>



<div className="team-actions">

<button className="edit">

<FaEdit/>

Edit

</button>



<button

className="delete"

onClick={()=>

remove(
member.id
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