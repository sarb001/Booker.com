import React from 'react';
import rooms from '../../data/rooms.json';

import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BestRooms = () => {

      const featuredrooms = rooms.filter((room) => room.featured === true);
      console.log('feature rooms-',featuredrooms);

  return (
    <>
    
    <div className='m-4'>
          <div className='text-3xl md:text-[45px]'>
             Best Rooms here - 
          </div>  
     <div className="flex flex-wrap justify-between md:justify-around">
      {featuredrooms && featuredrooms?.map((data) => {
         return (
          <div key = {data.id}>
            <div className="w-[270px] h-[414px]  overflow-hidden bg-slate-500 m-4">

              
                <div className='w-[100%] h-[60%]  object-cover '> 
                    <img className='w-full h-full'  src = {data.img}   alt = {data.name} />
                </div>
           

              <div className='h-[40%] flex flex-col gap-1 p-1 '>
            
                  <div> Name - {data.name} </div>
                  <div className='text-xl'> Only Adults - {data?.adults} </div>

                  <div className='text-xl'>  
                    {data?.children >= 1 ? ` Children - ${data?.children}` : "No Children Included" } 
                  </div>

                  <div className='my-4'>
                    <Link className = 'm-4 p-2  border-2 border-black rounded-xl'
                    to = {`/room/${data.id}`}> 
                      Book now ${data.price} 
                    </Link>
                  </div>

              </div>

            </div>
          </div>
         )
      })}

     </div>
    </div>
    
    </>
  )
}

export default BestRooms