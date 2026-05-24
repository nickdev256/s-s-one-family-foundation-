import "./Navbar.css"

import { motion } from "framer-motion"

import { Link,useNavigate } from "react-router-dom"

import {

FaBars,
FaChevronDown

}

from "react-icons/fa"

import {

useRef

}

from "react"

import logo from "../assets/image/logo.jpg"



export default function Navbar(){

const navigate=useNavigate()

const timer=useRef(null)



function startPress(){

timer.current=setTimeout(()=>{

navigate("/admin")

},2000)

}



function endPress(){

clearTimeout(timer.current)

}



return(

<motion.nav

className="navbar"

initial={{
y:-100,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:1
}}

>


{/* LOGO */}

<Link

to="/"

className="logo"

onMouseDown={startPress}

onMouseUp={endPress}

onMouseLeave={endPress}

onTouchStart={startPress}

onTouchEnd={endPress}

>

<img
src={logo}
alt="S&S One Family Foundation"
/>

<div className="logo-text">

<h1>

S&S

</h1>

<span>

ONE FAMILY

</span>

</div>

</Link>



{/* NAVIGATION */}

<div className="nav-links">


<div className="nav-item">

<Link to="/">

HOME

</Link>

</div>



<div className="nav-item">

<Link to="/about">

WHO WE ARE

<FaChevronDown/>

</Link>

<div className="dropdown">

<Link to="/about">

Who We Are

</Link>

<Link to="/team">

Our Team

</Link>

<Link to="/about#mission">

Mission

</Link>

<Link to="/about#vision">

Vision

</Link>

<Link to="/about#values">

Values

</Link>

</div>

</div>



<div className="nav-item">

<Link to="/programs">

WHAT WE DO

<FaChevronDown/>

</Link>

<div className="dropdown">

<Link to="/programs">

All Programs

</Link>

<Link to="/programs#education">

Education

</Link>

<Link to="/programs#health">

Health

</Link>

<Link to="/programs#child">

Child Protection

</Link>

<Link to="/programs#youth">

Youth Empowerment

</Link>

<Link to="/programs#community">

Community Development

</Link>

</div>

</div>



<div className="nav-item">

<Link to="/work">

GET INVOLVED

<FaChevronDown/>

</Link>

<div className="dropdown">

<Link to="/volunteer">

Volunteer

</Link>

<Link to="/donate">

Donate

</Link>

<Link to="/partner">

Partner

</Link>

<Link to="/contact">

Contact

</Link>

</div>

</div>



<div className="nav-item">

<Link to="/gallery">

GALLERY

</Link>

</div>



<div className="nav-item">

<Link to="/contact">

CONTACT

</Link>

</div>

</div>



<div className="nav-actions">

<Link

to="/donate"

className="donate-btn"

>

Donate

</Link>

</div>



<div className="mobile-menu">

<FaBars/>

</div>

</motion.nav>

)

}