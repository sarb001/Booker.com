import React from 'react'
import testimonials from '../../data/testimonials.json' ;

const Testimonials = () => {
  return (
    <div className="flex flex-wrap m-2 justify-evenly">
          {testimonials.map((data) => {
             return (
              <div className='w-[450px] h-[250px] flex flex-col overflow-hidden  bg-lime-500 m-2 p-4
               md:w-[350px] md:h-[250px] md:mx-1 
              '  key = {data.id}>

                <div className='flex flex-row items-center '>
                  <span className='w-[60px] h-[60px] overflow-hidden'> 
                    <img className ='w-[75%] h-[120%]  object-cover ' src = {data.image} alt = {data.name} /> 
                  </span>
                  <div className='text-xl'> {data.name} </div> 
                </div>

                <div className='text-[16px] mt-4 '> {data.testimony} </div>
              </div>
             )
          })}
    </div>
  )
}

export default Testimonials