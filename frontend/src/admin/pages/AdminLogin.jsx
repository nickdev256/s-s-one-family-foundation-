import "./AdminLogin.css"

import { useNavigate } from "react-router-dom"

import {
FaLock,
FaUserShield
}

from "react-icons/fa"

import logo from "../../assets/image/logo.jpg"

export default function AdminLogin(){

const navigate=useNavigate()

function login(e){

e.preventDefault()

navigate("/admin/dashboard")

}

return(

<div className="admin-login">

<div className="admin-overlay"></div>


<div className="login-card">


<img

src={logo}

alt="S&S One Family Foundation"

className="admin-logo"

/>


<div className="admin-badge">

<FaUserShield/>

</div>



<h1>

Admin Login

</h1>

<p>

S&S One Family Foundation
Control Center

</p>



<form
onSubmit={login}
>

<input
type="email"
placeholder="Email Address"
required
/>

<input
type="password"
placeholder="Password"
required
/>

<button
type="submit"
>

<FaLock/>

LOGIN

</button>

</form>



<span>

Protected Dashboard Access

</span>

</div>

</div>

)

}