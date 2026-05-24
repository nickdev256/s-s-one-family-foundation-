import "./DonatePage.css"

import { useState } from "react"

import {
FaHandsHelping,
FaUsers,
FaCheck
}

from "react-icons/fa"

export default function DonatePage(){

const [step,setStep]=useState(1)

const [donationType,setDonationType]=useState(
"General Fund"
)

const [amount,setAmount]=useState(100)

const [monthly,setMonthly]=useState(false)

const [payment,setPayment]=useState(
"Credit Card"
)

const [form,setForm]=useState({

firstName:"",
lastName:"",
email:"",
comment:""

})

const amounts=[
10,
25,
50,
100,
250
]

function update(e){

setForm({

...form,

[e.target.name]:
e.target.value

})

}

function donate(){

alert(

`Donation Submitted

Type: ${donationType}

Amount: $${amount}

Frequency:
${monthly?"Monthly":"One Time"}

Payment:
${payment}

Thank You ❤️`

)

}

return(

<div className="donate-page">


{/* HERO */}

<section className="donate-hero">

<div className="hero-overlay"/>

<div className="hero-content">

<h1>

Donate Now

</h1>

<p>

Your support transforms lives through
education, healthcare and community
empowerment.

</p>

</div>

</section>



<section className="donate-container">


{/* STEP 1 */}

{

step===1&&(

<>

<div className="donate-heading">

<span>

MAKE AN IMPACT

</span>

<h2>

CHOOSE DONATION TYPE

</h2>

<div className="divider">

<div/>

♡

<div/>

</div>

<p>

Choose where your support
creates the greatest impact.

</p>

</div>



<div className="option-grid">

{

[

{

title:"General Fund",

icon:<FaHandsHelping/>,

text:
"Support our overall mission."

},

{

title:"Care For Children",

icon:<FaUsers/>,

text:
"Support vulnerable children."

}

]

.map((card)=>(

<button

key={card.title}

className={

donationType===card.title

?

"donation-card active"

:

"donation-card"

}

onClick={()=>

setDonationType(
card.title
)

}

>

{

donationType===card.title&&(

<div className="selected">

<FaCheck/>

</div>

)

}

<div className="icon">

{card.icon}

</div>

<h3>

{card.title}

</h3>

<div className="small-line"/>

<p>

{card.text}

</p>

</button>

))

}

</div>



<div className="donate-action">

<button
onClick={()=>

setStep(2)

}
>

CONTINUE →

</button>

</div>

</>

)

}



{/* STEP 2 */}

{

step===2&&(

<>

<h2>

CHOOSE AMOUNT

</h2>

<div className="amount-grid">

{

amounts.map(item=>(

<div

key={item}

className={

amount===item

?

"amount-card active"

:

"amount-card"

}

onClick={()=>

setAmount(item)

}

>

${item}

</div>

))

}

</div>



<label className="monthly">

<input

type="checkbox"

checked={monthly}

onChange={()=>

setMonthly(
!monthly
)

}

/>

Monthly Donation

</label>



<div className="nav">

<button
onClick={()=>

setStep(1)

}
>

BACK

</button>

<button
onClick={()=>

setStep(3)

}
className="continue"
>

CONTINUE

</button>

</div>

</>

)

}



{/* STEP 3 */}

{

step===3&&(

<>

<h2>

YOUR DETAILS

</h2>

<form>

<input
name="firstName"
placeholder="First Name"
onChange={update}
/>

<input
name="lastName"
placeholder="Last Name"
onChange={update}
/>

<input
name="email"
placeholder="Email"
onChange={update}
/>

<textarea
name="comment"
placeholder="Message"
onChange={update}
/>

</form>



<div className="nav">

<button
onClick={()=>

setStep(2)

}
>

BACK

</button>

<button
className="continue"
onClick={()=>

setStep(4)

}
>

CONTINUE

</button>

</div>

</>

)

}



{/* STEP 4 */}

{

step===4&&(

<>

<h2>

PAYMENT METHOD

</h2>

<div className="payment-grid">

{

[

"Credit Card",

"PayPal",

"Google Pay"

]

.map(method=>(

<button

key={method}

className={

payment===method

?

"active"

:

""

}

onClick={()=>

setPayment(
method
)

}

>

{method}

</button>

))

}

</div>



<div className="nav">

<button
onClick={()=>

setStep(3)

}
>

BACK

</button>

<button
className="continue"
onClick={()=>

setStep(5)

}
>

CONTINUE

</button>

</div>

</>

)

}



{/* STEP 5 */}

{

step===5&&(

<>

<h2>

DONATION SUMMARY

</h2>

<div className="summary">

<p>

Donation

<span>

{donationType}

</span>

</p>

<p>

Amount

<span>

${amount}

</span>

</p>

<p>

Frequency

<span>

{
monthly
?
"Monthly"
:
"One Time"
}

</span>

</p>

<p>

Payment

<span>

{payment}

</span>

</p>

</div>



<div className="nav">

<button
onClick={()=>

setStep(4)

}
>

BACK

</button>

<button
className="continue"
onClick={donate}
>

DONATE NOW

</button>

</div>

</>

)

}

</section>

</div>

)

}