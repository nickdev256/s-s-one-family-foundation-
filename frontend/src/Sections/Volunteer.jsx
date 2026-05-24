import "./Volunteer.css"
import { Link } from "react-router-dom"

export default function Volunteer(){

return(

<section className="volunteer">

<div className="volunteer-overlay"></div>

<div className="volunteer-content">

<h1>

CHANGE A LIFE TODAY

</h1>

<div className="volunteer-line"></div>

<p>

As long as poverty, injustice & inequality persist,
none of us can truly rest. It doesn’t take much to
change a life. Get involved today and start making
the difference.

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