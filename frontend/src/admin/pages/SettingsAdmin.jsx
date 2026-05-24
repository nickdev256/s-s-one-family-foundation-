import "./Settings.css"

import {

useState

}

from "react"

import {

FaCog,
FaGlobe,
FaEnvelope,
FaPhone,
FaBell,
FaSave

}

from "react-icons/fa"

import AdminLayout from "../layout/AdminLayout"



export default function Settings(){

const [

settings,
setSettings

]=useState({

website:"S&S One Family Foundation",

email:"admin@ssfamily.org",

phone:"+256 700 000000",

notifications:true

})



function update(e){

setSettings({

...settings,

[e.target.name]:

e.target.type==="checkbox"

?

e.target.checked

:

e.target.value

})

}



function save(){

alert("Settings Saved")

}



return(

<AdminLayout>

<div className="settings-page">


<div className="settings-header">

<span>

SYSTEM CONFIGURATION

</span>

<h1>

System Settings

</h1>

<p>

Configure website information
and administration preferences.

</p>

</div>



<div className="settings-card">


<label>

<div className="label">

<FaGlobe/>

Website Name

</div>

<input

name="website"

value={settings.website}

onChange={update}

/>

</label>



<label>

<div className="label">

<FaEnvelope/>

Admin Email

</div>

<input

name="email"

value={settings.email}

onChange={update}

/>

</label>



<label>

<div className="label">

<FaPhone/>

Primary Phone

</div>

<input

name="phone"

value={settings.phone}

onChange={update}

/>

</label>



<div className="switch-row">

<div className="label">

<FaBell/>

Notifications

</div>

<label className="switch">

<input

type="checkbox"

name="notifications"

checked={

settings.notifications

}

onChange={update}

/>

<span/>

</label>

</div>



<button

className="save"

onClick={save}

>

<FaSave/>

Save Settings

</button>

</div>

</div>

</AdminLayout>

)

}