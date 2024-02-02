import React from 'react';
import rooms from '../../data/rooms.json';

const BestRooms = () => {
  return (
     <div className="flex flex-wrap">
      {rooms.map((data,index) => {
         return (
          <>
            <div className="w-[400px] h-[400px]  overflow-hidden bg-slate-500 m-4 p-4 " key = {index}>
              <div className='w-[100%] h-[80%]  object-cover '> 
                  <img className='w-full h-full'  src = {data.img}   alt = {data.name} />
              </div>
              <div> Name - {data.name} </div>
              <div> Guests - {data.guests} </div>
              <button> Book now ${data.price} </button>
            </div>
          </>
         )
      })}
     </div>
  )
}

export default BestRooms