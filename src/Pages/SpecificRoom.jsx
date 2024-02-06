import React from 'react'
import { useParams  , useNavigate } from 'react-router-dom'
import room from '../data/rooms.json' ;
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../Reducers/FIlterSlice';

const SpecificRoom = () => {

    const { roomid  } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(' url id is- ',roomid);

    const selectedroom = room.find((room) => room.id ===  parseInt(roomid));
    console.log('selected room -',selectedroom); 

    const maincart = useSelector((state) => state.filter.cart);
    
    const { about, bedSize ,featured , adults ,id , img ,name ,price , children  } =  selectedroom;

    const Alreadyfound = maincart.find((item) => item.id === selectedroom.id);
    console.log('already Found -',Alreadyfound);

    const handleaddtocart = (cartitems) => {
      if(!Alreadyfound){
        const  {id,name,img,price} = cartitems ;
        console.log('ading cart id -',{id,name,img,price});
        dispatch(addtoCart({id,name,img,price}));
        return navigate('/cart');
      }else{
        return alert('Already Present in Cart');
      }
    }
    
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
           <div className='m-8'>
             <button  onClick={() => handleaddtocart({id,name,img,price})} className='py-2 px-8 bg-slate-500'>
               Add to Cart </button>
           </div>
      </div>

    </div>
    </>
  )
}

export default SpecificRoom