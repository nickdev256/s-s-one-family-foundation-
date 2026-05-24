import "./GalleryManager.css"

import {

useState

}

from "react"

import AdminLayout from "../layout/AdminLayout"

import {

FaImages,
FaVideo,
FaTrash,
FaPlus

}

from "react-icons/fa"



export default function GalleryManager(){

const [

photos,
setPhotos

]=useState([])

const [

videos,
setVideos

]=useState([])



function uploadPhotos(e){

const files=

Array.from(
e.target.files
)

const images=

files.map(file=>({

url:

URL.createObjectURL(
file
),

name:file.name

}))

setPhotos([

...photos,

...images

])

}



function uploadVideos(e){

const files=

Array.from(
e.target.files
)

const media=

files.map(file=>({

url:

URL.createObjectURL(
file
),

name:file.name

}))

setVideos([

...videos,

...media

])

}



function deletePhoto(index){

setPhotos(

photos.filter(

(_,i)=>

i!==index

)

)

}



function deleteVideo(index){

setVideos(

videos.filter(

(_,i)=>

i!==index

)

)

}



return(

<AdminLayout>

<div className="gallery-manager">


<div className="gallery-header">

<span>

MEDIA MANAGEMENT

</span>

<h1>

Gallery Manager

</h1>

<p>

Manage photos and videos
displayed on the website.

</p>

</div>



<div className="upload-box">


<label className="upload-btn">

<FaImages/>

Upload Photos

<input

type="file"

multiple

accept="image/*"

hidden

onChange={uploadPhotos}

/>

</label>



<label className="upload-btn">

<FaVideo/>

Upload Videos

<input

type="file"

multiple

accept="video/*"

hidden

onChange={uploadVideos}

/>

</label>

</div>



{/* PHOTOS */}

<div className="media-section">

<h2>

Photos

</h2>

<div className="media-grid">

{

photos.length===0

?

<div className="empty">

<FaPlus/>

No Photos Uploaded

</div>

:

photos.map((item,index)=>(

<div
key={index}
className="media-card"
>

<img
src={item.url}
alt=""
/>

<button

onClick={()=>

deletePhoto(
index
)

}

>

<FaTrash/>

</button>

</div>

))

}

</div>

</div>



{/* VIDEOS */}

<div className="media-section">

<h2>

Videos

</h2>

<div className="media-grid">

{

videos.length===0

?

<div className="empty">

<FaPlus/>

No Videos Uploaded

</div>

:

videos.map((item,index)=>(

<div
key={index}
className="media-card"
>

<video
controls
>

<source
src={item.url}
/>

</video>

<button

onClick={()=>

deleteVideo(
index
)

}

>

<FaTrash/>

</button>

</div>

))

}

</div>

</div>

</div>

</AdminLayout>

)

}