import "./GalleryPage.css"

const categories=[
"All",
"Education",
"Health",
"Youth",
"Women",
"Community",
"Environment"
]

const gallery=[

{
image:"/images/gallery1.jpg",
title:"Education Support",
category:"Education"
},

{
image:"/images/gallery2.jpg",
title:"Community Outreach",
category:"Community"
},

{
image:"/images/gallery3.jpg",
title:"Health Camp",
category:"Health"
},

{
image:"/images/gallery4.jpg",
title:"Women Empowerment",
category:"Women"
},

{
image:"/images/gallery5.jpg",
title:"Youth Training",
category:"Youth"
},

{
image:"/images/gallery6.jpg",
title:"Tree Planting",
category:"Environment"
},

]

export default function GalleryPage(){

return(

<section className="gallery-page">

<div className="gallery-hero">

<span>
OUR GALLERY
</span>

<h1>

Stories Of Hope In Pictures

</h1>

<p>

Explore moments of transformation,
community impact and lives being changed
through S&S One Family Foundation.

</p>

</div>


<div className="gallery-filter">

{
categories.map((item,index)=>(

<button key={index}>

{item}

</button>

))
}

</div>



<div className="featured-image">

<img
src="/images/hero-gallery.jpg"
alt=""
/>

<div className="featured-overlay">

<h2>

Building Brighter Futures

</h2>

<p>

Every image tells a story of hope.

</p>

</div>

</div>



<div className="gallery-grid">

{

gallery.map((item,index)=>(

<div
className="gallery-card"
key={index}
>

<img
src={item.image}
alt=""
/>

<div className="overlay">

<h3>

{item.title}

</h3>

<span>

{item.category}

</span>

</div>

</div>

))

}

</div>



<div className="gallery-impact">

<div>

<h2>

50+

</h2>

<p>

Community Programs

</p>

</div>

<div>

<h2>

10K+

</h2>

<p>

Lives Impacted

</p>

</div>

<div>

<h2>

100+

</h2>

<p>

Volunteers

</p>

</div>

<div>

<h2>

25+

</h2>

<p>

Partners

</p>

</div>

</div>

</section>

)

}