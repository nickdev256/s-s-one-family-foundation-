import {
BrowserRouter,
Routes,
Route
}

from "react-router-dom"



import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProgramsPage from "./pages/ProgramsPage"
import VolunteerPage from "./pages/VolunteerPage"
import DonatePage from "./pages/DonatePage"
import TeamPage from "./pages/TeamPage"
import PartnerPage from "./pages/PartnerPage"
import GalleryPage from "./pages/GalleryPage"

/* ADMIN */

import AdminLogin from "./admin/pages/AdminLogin"
import Dashboard from "./admin/pages/Dashboard"

import DonationsAdmin from "./admin/pages/DonationsAdmin"
import VolunteersAdmin from "./admin/pages/VolunteersAdmin"
import MessagesAdmin from "./admin/pages/MessagesAdmin"
import PartnersAdmin from "./admin/pages/PartnersAdmin"

import GalleryManager from "./admin/pages/GalleryManager"

import CMS from "./admin/pages/CMS"

import Reports from "./admin/pages/Reports"

import SettingsAdmin from "./admin/pages/SettingsAdmin"



/* TEMP PAGE */

function Work(){

return(

<div

style={{

minHeight:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:"3rem",

fontWeight:"800"

}}

>

Work With Us

</div>

)

}



export default function App(){

return(

<BrowserRouter>

<Routes>


{/* HOME */}

<Route

path="/"

element={
<HomePage/>
}

/>



{/* ABOUT */}

<Route

path="/about"

element={
<About/>
}

/>



{/* PROGRAMS */}

<Route

path="/programs"

element={
<ProgramsPage/>
}

/>



{/* GALLERY */}

<Route

path="/gallery"

element={
<GalleryPage/>
}

/>



{/* TEAM */}

<Route

path="/team"

element={
<TeamPage/>
}

/>



{/* CONTACT */}

<Route

path="/contact"

element={
<Contact/>
}

/>



{/* WORK */}

<Route

path="/work"

element={
<Work/>
}

/>



{/* DONATE */}

<Route

path="/donate"

element={
<DonatePage/>
}

/>



{/* PARTNER */}

<Route

path="/partner"

element={
<PartnerPage/>
}

/>



{/* VOLUNTEER */}

<Route

path="/volunteer"

element={
<VolunteerPage/>
}

/>



{/* =====================
ADMIN
===================== */}

<Route
path="/admin"
element={<AdminLogin/>}
/>

<Route
path="/admin/dashboard"
element={<Dashboard/>}
/>

<Route
path="/admin/donations"
element={<DonationsAdmin/>}
/>

<Route
path="/admin/volunteers"
element={<VolunteersAdmin/>}
/>

<Route
path="/admin/messages"
element={<MessagesAdmin/>}
/>

<Route
path="/admin/partners"
element={<PartnersAdmin/>}
/>

<Route
path="/admin/gallery"
element={<GalleryManager/>}
/>

<Route
path="/admin/cms"
element={<CMS/>}
/>

<Route
path="/admin/settings"
element={<SettingsAdmin/>}
/>

<Route
path="/admin/reports"
element={<Reports/>}
/>


{/* FALLBACK */}

<Route

path="*"

element={
<HomePage/>
}

/>


</Routes>

</BrowserRouter>

)

}