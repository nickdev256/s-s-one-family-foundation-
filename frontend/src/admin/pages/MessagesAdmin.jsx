import "./Messages.css"

import {

FaEnvelope,
FaReply,
FaTrash,
FaSearch,
FaInbox

}

from "react-icons/fa"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"



export default function Messages(){

const [

search,
setSearch

]=useState("")



const [

messages,
setMessages

]=useState([

{

id:1,

name:"John",

email:"john@gmail.com",

subject:"Volunteer Request",

message:
"I would like to join your volunteer program."

},

{

id:2,

name:"Sarah",

email:"sarah@gmail.com",

subject:"Partnership",

message:
"We want to collaborate with your NGO."

},

{

id:3,

name:"David",

email:"david@gmail.com",

subject:"Donation",

message:
"I need support completing my donation."

}

])



function deleteMessage(id){

setMessages(

messages.filter(

msg=>

msg.id!==id

)

)

}



function reply(email){

window.location.href=

`mailto:${email}`

}



const filtered=

messages.filter(msg=>

msg.name

.toLowerCase()

.includes(

search.toLowerCase()

)

||

msg.subject

.toLowerCase()

.includes(

search.toLowerCase()

)

)



return(

<AdminLayout>

<div className="messages-page">


<div className="page-header">

<div>

<h1>

Messages Inbox

</h1>

<p>

Website communications

</p>

</div>



<div className="message-count">

<FaInbox/>

{filtered.length}

</div>

</div>



<div className="search-bar">

<FaSearch/>

<input

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

placeholder="Search messages"

/>

</div>



<div className="messages-grid">

{

filtered.map(msg=>(

<div

key={msg.id}

className="message-card"

>

<div className="message-top">

<div className="message-icon">

<FaEnvelope/>

</div>



<div>

<h2>

{msg.name}

</h2>

<span>

{msg.email}

</span>

</div>

</div>



<h3>

{msg.subject}

</h3>



<p>

{msg.message}

</p>



<div className="message-actions">


<button

className="reply"

onClick={()=>

reply(
msg.email
)

}

>

<FaReply/>

Reply

</button>



<button

className="delete"

onClick={()=>

deleteMessage(
msg.id
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