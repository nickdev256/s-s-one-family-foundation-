import "./Navbar.css"


import { motion } from "framer-motion"

import { Link, useNavigate } from "react-router-dom"

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch
} from "react-icons/fa"

import { useEffect, useRef, useState } from "react"

import logo from "../assets/image/logo.jpg"


const SEARCH_DATA = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Programs", path: "/programs" },
  { name: "Education", path: "/programs#education" },
  { name: "Health", path: "/programs#health" },
  { name: "Child Protection", path: "/programs#child" },
  { name: "Youth Empowerment", path: "/programs#youth" },
  { name: "Community Development", path: "/programs#community" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Donate", path: "/donate" },
  { name: "Partner", path: "/partner" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" }
]

export default function Navbar() {

  const navigate = useNavigate()
  const timer = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  const [openSearch, setOpenSearch] = useState(false)
  const [query, setQuery] = useState("")
  const searchRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
const [programsOpen, setProgramsOpen] = useState(false);
const [involvedOpen, setInvolvedOpen] = useState(false);

  const filteredResults = SEARCH_DATA.filter(item =>
  item.name.toLowerCase().includes(query.toLowerCase())
  
)

  // CLOSE SEARCH WHEN CLICKING OUTSIDE
useEffect(() => {
  function handleClickOutside(e) {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setOpenSearch(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

// NAVBAR SCROLL EFFECT
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
}, [])


     


  function startPress() {
    timer.current = setTimeout(() => {
      navigate("/admin")
    }, 2000)
  }

  function endPress() {
    clearTimeout(timer.current)
  }

  return (
    <>

      {/* SEARCH OVERLAY */}
      {openSearch && (
  <div className="search-overlay">
    <div className="search-box" ref={searchRef}>

      <input
        type="text"
        placeholder="Search pages..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus

onKeyDown={(e) => {
  if (!filteredResults.length) return

  if (e.key === "ArrowDown") {
    e.preventDefault()
    setActiveIndex((prev) =>
      prev < filteredResults.length - 1 ? prev + 1 : 0
    )
  }

  if (e.key === "ArrowUp") {
    e.preventDefault()
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : filteredResults.length - 1
    )
  }

  if (e.key === "Enter") {
    e.preventDefault()
    const selected = filteredResults[activeIndex]
    if (selected) {
      navigate(selected.path)
      setOpenSearch(false)
      setQuery("")
    }
  }
}}

      />

      {query.length > 0 && (
        <div className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <div
                key={index}
               className={`search-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => {
                  setOpenSearch(false)
                  setQuery("")
                  navigate(item.path)
                }}
              >
                {item.name}
              </div>
            ))
          ) : (
            <div className="search-item">No results found</div>
          )}
        </div>
      )}

    </div>
  </div>
)}

      <motion.nav
  className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
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
    <h1>S&S</h1>
    <span>ONE FAMILY</span>
  </div>
</Link>

{/* MOBILE MENU BUTTON */}
<div className="mobile-icons">

  <button
    className="mobile-search-btn-top"
    onClick={() => {
      setOpenSearch(true);
      setActiveIndex(0);
    }}
  >
    <FaSearch />
  </button>

  <div
    className="mobile-menu-btn"
    onClick={() => setMobileMenu(!mobileMenu)}
  >
    {mobileMenu ? <FaTimes /> : <FaBars />}
  </div>

</div>

{mobileMenu && (
  <div
    className="mobile-overlay"
    onClick={() => setMobileMenu(false)}
  />
)}

{/* NAVIGATION */}
<div className={`nav-links ${mobileMenu ? "active" : ""}`}>

  <div className="mobile-menu-header">
  <h4>MENU</h4>
</div>

<div className="nav-item">
  <Link
    to="/"
    onClick={() => setMobileMenu(false)}
  >
    HOME
  </Link>
</div>



       <div className="nav-item">

  {/* DESKTOP LINK */}
 {!isMobile && (
  <Link to="/about">
    WHO WE ARE <FaChevronDown />
  </Link>
)}

  {/* MOBILE DROPDOWN */}
  {isMobile && (
  <div
    className="mobile-dropdown-title"
    onClick={() => setAboutOpen(!aboutOpen)}
  >
    WHO WE ARE <FaChevronDown />
  </div>
)}

  {aboutOpen && (
    <div className="mobile-submenu">
      <Link to="/about">Who We Are</Link>
      <Link to="/team">Our Team</Link>
      <Link to="/about#mission">Mission</Link>
      <Link to="/about#vision">Vision</Link>
      <Link to="/about#values">Values</Link>
    </div>
  )}

  {/* DESKTOP DROPDOWN */}
  <div className="dropdown">
    <Link to="/about">Who We Are</Link>
    <Link to="/team">Our Team</Link>
    <Link to="/about#mission">Mission</Link>
    <Link to="/about#vision">Vision</Link>
    <Link to="/about#values">Values</Link>
  </div>

</div>

{/* WHAT WE DO */}
<div className="nav-item">

  {!isMobile && (
  <Link to="/programs">
    WHAT WE DO <FaChevronDown />
  </Link>
)}

{isMobile && (
  <div
    className="mobile-dropdown-title"
    onClick={() => setProgramsOpen(!programsOpen)}
  >
    WHAT WE DO <FaChevronDown />
  </div>
)}

  {programsOpen && (
    <div className="mobile-submenu">
      <Link to="/programs">All Programs</Link>
      <Link to="/programs#education">Education</Link>
      <Link to="/programs#health">Health</Link>
      <Link to="/programs#child">Child Protection</Link>
      <Link to="/programs#youth">Youth Empowerment</Link>
      <Link to="/programs#community">Community Development</Link>
    </div>
  )}

  <div className="dropdown">
    <Link to="/programs">All Programs</Link>
    <Link to="/programs#education">Education</Link>
    <Link to="/programs#health">Health</Link>
    <Link to="/programs#child">Child Protection</Link>
    <Link to="/programs#youth">Youth Empowerment</Link>
    <Link to="/programs#community">Community Development</Link>
  </div>

</div>


{/* GET INVOLVED */}
<div className="nav-item">

 {!isMobile && (
  <Link to="/work">
    GET INVOLVED <FaChevronDown />
  </Link>
)}

 {isMobile && (
  <div
    className="mobile-dropdown-title"
    onClick={() => setInvolvedOpen(!involvedOpen)}
  >
    GET INVOLVED<FaChevronDown />
  </div>
)}

  {involvedOpen && (
    <div className="mobile-submenu">
      <Link to="/volunteer">Volunteer</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/partner">Partner</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )}

  <div className="dropdown">
    <Link to="/volunteer">Volunteer</Link>
    <Link to="/donate">Donate</Link>
    <Link to="/partner">Partner</Link>
    <Link to="/contact">Contact</Link>
  </div>

</div>
          <div className="nav-item">

          <Link
  to="/gallery"
  onClick={() => setMobileMenu(false)}
>
  GALLERY
</Link>
          </div>

          <div className="nav-item">
  <Link
    to="/contact"
    onClick={() => setMobileMenu(false)}
  >
    CONTACT
  </Link>
</div>


<Link
  to="/donate"
  className="mobile-donate"
  onClick={() => setMobileMenu(false)}
>
  Donate
</Link>

</div>
        

        {/* NAV ACTIONS */}
        <div className="nav-actions">

          <button
            className="search-btn"
            onClick={() => {
  setOpenSearch(true)
  setActiveIndex(0)
}}
          >
            <FaSearch />
          </button>

          <Link
  to="/donate"
  className="donate-btn"
  onClick={() => window.scrollTo(0, 0)}
>
  Donate
</Link>

        </div>

        

      </motion.nav>

    </>
  )
}