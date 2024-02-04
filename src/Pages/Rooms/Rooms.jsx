import React from 'react';
import rooms from '../../data/rooms.json' ;
import  { Link }  from  'react-router-dom';

const Rooms = () => {

  return (
    <div className="rooms-container m-16 ">
        <span className='text-4xl'> Our Rooms </span>
        <div className = 'flex flex-wrap'>
       
        {rooms.map((data) => {
         return (
          <>
            <div className="w-[370px] h-[500px]  overflow-hidden bg-slate-500 m-4  "
            key = {data.id}>

              <div className='w-[100%] h-[60%]  object-cover '> 
                  <img className='w-full h-full'  src = {data.img}   alt = {data.name} />
              </div>

              <div className='h-[40%] flex flex-col justify-center items-center'>
                <div className='text-2xl'> Name - {data.name} </div>
                <div className='text-2xl'> Adults - {data.adults} </div>
                <div className='text-2xl'> Children - {data.children} </div>

                <div className='m-4'>
                  <Link className = 'p-2  border-2 border-black rounded-xl'
                  to = {`/room/${data.id}`}> 
                  Book now ${data.price} 
                  </Link>
                </div>

              </div>
               
            </div>
          </>
         )
        })}

       </div>
    </div>
  )
}

export default Rooms