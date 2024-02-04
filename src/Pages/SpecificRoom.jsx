import React from 'react'
import { useParams } from 'react-router-dom'
import room from '../data/rooms.json' ;

const SpecificRoom = () => {

    const { roomid  } = useParams();
    console.log(' url id is- ',roomid);

    const selectedroom = room.find((room) => room.id ===  parseInt(roomid));
    console.log('selected room -',selectedroom); 

     const { about, bedSize ,featured , adults ,id , img ,name ,price , children  } =  selectedroom;

  return (
    <>
     <div className="specificroom m-32 mt-16 flex flex-row">

      <div className='w-[65%]'>
        <span className='text-4xl'> { name } </span>
        <div className='object-cover w-[650px] h-[350px] my-8 rounded-2xl overflow-hidden'>
           <img className='w-full h-full' src = {img}  alt = {name} /> 
        </div>
           <div className='text-xl'> {about}  </div>
        <span className='text-3xl'>
          <div>  Adults - {adults}  </div>
          <div>  Bed Size - {bedSize}  </div>
          <div> No. of  Children - {children} </div>
        </span>
      </div>

      <div className='w-[35%]'>
           <div className='text-3xl'>  Price - {price} </div>
      </div>

    </div>
    </>
  )
}

export default SpecificRoom