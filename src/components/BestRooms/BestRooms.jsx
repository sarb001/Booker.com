import React from 'react';
import rooms from '../../data/rooms.json';

import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BestRooms = () => {

    const filteredrooms = useSelector(state => state?.filter.hotels);
    console.log('filtered romms -',filteredrooms);


  return (
     <div className="flex flex-wrap m-16 ">
      {filteredrooms && filteredrooms?.map((data) => {
         return (
          <div key = {data.id}>
            <div className="w-[370px] h-[450px]  overflow-hidden bg-slate-500 m-4">

              <div className='w-[100%] h-[70%]  object-cover '> 
                  <img className='w-full h-full'  src = {data.img}   alt = {data.name} />
              </div>

              <div> Name - {data.name} </div>
              <div className='text-3xl'> Adults - {data?.adults} </div>

              <Link className = 'p-2  border-2 border-black rounded-xl'
              to = {`/room/${data.id}`}> 
                 Book now ${data.price} 
               </Link>

            </div>
          </div>
         )
      })}
     </div>
  )
}

export default BestRooms