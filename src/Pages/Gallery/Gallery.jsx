import React from 'react'
import './Gallery.css' ;

const Gallery = () => {

   const allimages = [
    {id : 1 , imgsrc : "/src/assests/Best-room-2.avif" , name : "first-image" },
    {id : 2 , imgsrc : "/src/assests/Best-room-3.avif" , name : "second-image" },
    {id : 3 , imgsrc : "/src/assests/contact-us.avif" , name : "fourth-image" },
    {id : 4 , imgsrc : "/src/assests/penthouse.jpeg" , name : "fifth-image" },
    {id : 5 , imgsrc : "/src/assests/spa.jpeg" , name : "sixth-image" },
   ]


  return (
    <div className="gallery">
       <div className='w-[100%] h-[300px] lg:relative'>
         
        <div className='text-4xl absolute top-48  left-[41%] text-white lg:top-28 lg:left1/ '> Gallery </div>
         <img className='w-full h-full object-cover' src = "/src/assests/gallery.avif" alt = "gallery" />
       </div>

       <div className="images-container m-16">
         <div className='flex flex-wrap flex-row md:gap-8 '>
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
         </div>
       </div>

    </div>
  )
}

export default Gallery