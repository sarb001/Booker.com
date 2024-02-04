import React from 'react'
import facilities from '../../data/facilities.json';

const Facilities = () => {
  return (
    <div className="facilties-component m-16 ">
       <h2> Facilities  </h2>
        {facilities.map((data) => {
           return (

              <div className='grid  grid-cols-2'  key = {data.id}>
                <div className='w-[100%] h-[90%] overflow-hidden' >
                   <img className='w-full h-full object-cover  rounded-2xl' src = {data.img}   alt = {data.title} /> 
                </div>

                <div className='flex flex-col items-center justify-center p-12' >
                  <span className='text-4xl'> {data.title}  </span>
                  <div> {data.desc} </div>
                </div>
              </div>
            )
         })}
    </div>
  )
}

export default Facilities