import React from 'react'
import './Gallery.css' ;

const Gallery = () => {

   const allimages = [
    {id : 1 , imgsrc : "/src/assests/Best-room-2.avif" , name : "first-image" },
    {id : 2 , imgsrc : "/src/assests/Best-room-3.avif" , name : "second-image" },
    {id : 3 , imgsrc : "/src/assests/Best-Room.avif" , name : "third-image" },
    {id : 4 , imgsrc : "/src/assests/contact-us.avif" , name : "fourth-image" },
    {id : 5 , imgsrc : "/src/assests/penthouse.jpeg" , name : "fifth-image" },
    {id : 6 , imgsrc : "/src/assests/spa.jpeg" , name : "sixth-image" },
   ]


  return (
    <div className="gallery">
       <div className='w-[100%] h-[350px] lg:relative'>
        <div className='text-4xl lg:absolute lg:top-36 lg:left-1/2 lg:text-white '> Gallery </div>
         <img className='w-full h-full object-cover' src = "/src/assests/gallery.avif" alt = "gallery" />
       </div>

       <div className="images-container m-16">
         <div className='flex flex-wrap flex-row'>
            {allimages.map((data) => {
               return (
                <>
                <div id = {data.id}>
                   <div className='w-[100%] h-[250px] my-12 '> 
                    <img className='w-full h-full object-cover' src = {data.imgsrc}  alt = {data.name} />
                   </div>
                </div>
                </>
               )
            })}
           <img src = ""  alt = ""/>
         </div>
       </div>
    </div>
  )
}

export default Gallery