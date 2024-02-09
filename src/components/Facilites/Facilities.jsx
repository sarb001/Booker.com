import React from 'react'
import facilities from '../../data/facilities.json';

const Facilities = () => {
  return (
    <div className="facilties-component m-8 ">
       <div className='text-4xl my-4'> Facilities  </div>
        {facilities.map((data) => {
           return (
              <>
              <div className='grid  grid-rows-2  gap-1 my-16  
                md:grid-cols-2
              '  key = {data.id}>
                <div className='w-[100%] h-[90%] overflow-hidden' >
                   <img className='w-full h-full object-cover  rounded-2xl' src = {data.img}   alt = {data.title} /> 
                </div>

                <div className='flex flex-col items-center justify-center p-1 ' >
                  <span className='text-4xl'> {data.title}  </span>
                  <div className='py-4'> {data.desc} </div>
                </div>
              </div>
              </>
            )
         })}
    </div>
  )
}

export default Facilities