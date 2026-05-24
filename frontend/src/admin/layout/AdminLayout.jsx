import "./AdminLayout.css"

import Sidebar from "../components/Sidebar"

import Topbar from "../components/Topbar"



export default function AdminLayout({

children

}){

return(

<div className="admin-layout">


{/* SIDEBAR */}

<aside className="layout-sidebar">

<Sidebar/>

</aside>



{/* MAIN */}

<main className="admin-main">


<Topbar/>


<section className="admin-content">

{children}

</section>


</main>

</div>

)

}