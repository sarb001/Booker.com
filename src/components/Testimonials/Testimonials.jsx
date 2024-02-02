import React from 'react'
import testimonials from '../../data/testimonials.json' ;

const Testimonials = () => {
  return (
    <div className="flex flex-wrap m-16 justify-evenly">
          {testimonials.map((data) => {
             return (
              <div className='w-[450px] h-[250px] flex flex-col overflow-hidden  bg-lime-500 m-16 p-4'  key = {data.id}>

                <div className='flex flex-row items-center '>
                  <span className='w-[60px] h-[60px] overflow-hidden'> 
                    <img className ='w-[75%] h-[120%]  object-cover ' src = {data.image} alt = {data.name} /> 
                  </span>
                  <div className='text-xl'> {data.name} </div> 
                </div>

                <div className='text-xl mt-4 '> {data.testimony} </div>
              </div>
             )
          })}
    </div>
  )
}

export default Testimonials