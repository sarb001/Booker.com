import React from 'react';
import rooms from '../../data/rooms.json' ;
import  { Link }  from  'react-router-dom';

const Rooms = () => {
   

  return (
    <div className="rooms-container m-16 ">
        <h2> Our Rooms </h2>
        <div className = 'flex flex-wrap'>
       
        {rooms.map((data) => {
         return (
          <>
            <div className="w-[370px] h-[550px]  overflow-hidden bg-slate-500 m-4  "
            key = {data.id}>

              <div className='w-[100%] h-[60%]  object-cover '> 
                  <img className='w-full h-full'  src = {data.img}   alt = {data.name} />
              </div>

              <div> Name - {data.name} </div>
              <div> Guests - {data.guests} </div>
            
              <Link className = 'p-2  border-2 border-black rounded-xl'
              to = {`/room/${data.id}`}> 
               Book now ${data.price} 
               </Link>
               
            </div>
          </>
         )
        })}

       </div>
    </div>
  )
}

export default Rooms