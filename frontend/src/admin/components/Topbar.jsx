import "./Topbar.css"

import {

FaSearch,
FaBell,
FaChevronDown

}

from "react-icons/fa"

export default function Topbar(){

return(

<header className="topbar">


{/* LEFT */}

<div className="topbar-left">

<h2>

Admin Dashboard

</h2>

<p>

Manage S&S One Family Foundation

</p>

</div>



{/* RIGHT */}

<div className="topbar-right">


<div className="search-box">

<FaSearch/>

<input

type="text"

placeholder="Search..."

/>

</div>



<button className="notify">

<FaBell/>

<span>

3

</span>

</button>



<div className="admin-user">

<div className="avatar">

A

</div>

<div className="admin-info">

<h4>

Administrator

</h4>

<p>

Super Admin

</p>

</div>

<FaChevronDown/>

</div>

</div>

</header>

)

}