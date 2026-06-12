import "./Volunteer.css"
import { Link } from "react-router-dom"

export default function Volunteer(){

return(

<section className="volunteer">

<div className="volunteer-overlay"></div>

<div className="volunteer-content">

    <span className="volunteer-tag">
GET INVOLVED
</span>

<h1>

CHANGE A LIFE TODAY

</h1>

<div className="volunteer-line"></div>

<p>
Join us in creating brighter futures through education,
healthcare, community development and hope for vulnerable families.
</p>

<Link

to="/volunteer"

className="volunteer-link"

>

<button>

VOLUNTEER

</button>

</Link>

</div>

</section>

)

}