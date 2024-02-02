import React from 'react';
import rooms from '../../data/rooms.json';

import { Link  } from 'react-router-dom';


const BestRooms = () => {

  return (
     <div className="flex flex-wrap m-16 ">
      {rooms.map((data,index) => {
         return (
          <>
            <div className="w-[370px] h-[450px]  overflow-hidden bg-slate-500 m-4  " key = {index}>
              <div className='w-[100%] h-[70%]  object-cover '> 
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
  )
}

export default BestRooms