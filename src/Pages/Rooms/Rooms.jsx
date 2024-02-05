import React from 'react';
import rooms from '../../data/rooms.json' ;
import  { Link }  from  'react-router-dom';
import { useSelector } from 'react-redux';

const Rooms = () => {

    const filterdataroom = useSelector(state => state.filter.filterdata);
    console.log('rooms data filter -',filterdataroom);


  return (
    <div className="rooms-container m-16 ">

        <div className='flex flex-row w-full'>
          <div className='w-[40%]'>
              <h2> Rooms  </h2>
          </div>

          <div className = 'w-[60%] flex flex-wrap'>

            {filterdataroom && filterdataroom.length > 0 ? 
              (
              filterdataroom.map((data) => {
                  return (
                    <> 
                      <div className='rooms-container' key = {data.id}>
                        <div className="w-[600px] h-[250px] flex flex-row overflow-hidden bg-slate-500 m-4" >

                          <div className='w-[100%] h-[100%]  object-cover '> 
                              <img className='w-full h-full'  src = {data.img}   alt = {data.name} />
                          </div>

                          <div className='h-[100%] flex flex-col justify-center items-center p-8 '>
                            <div className='text-2xl'> Name - {data.name} </div>
                            <div className='text-2xl'> Adults - {data.adults} </div>
                            <div className='text-2xl'> Children - {data.children} </div>
                            <div className='text-2xl'> Total Rooms - {data.room_qty} </div>

                            <div className='m-4'>
                              <Link className = 'p-2  border-2 border-black rounded-xl'
                              to = {`/room/${data.id}`}> 
                              Book now ${data.price} 
                              </Link>
                            </div>

                          </div>
                          
                        </div>
                      </div>
                    </>
                  )
              }) 
              ): (
                <>
                  <h2>  No Rooms Found </h2>  
                </>
              )
            }

         </div>
       
       </div>
    </div>
  )
}

export default Rooms