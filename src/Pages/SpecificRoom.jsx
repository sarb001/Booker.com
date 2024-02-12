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
     <div className='mt-12 mx-8'>
        <span className='text-4xl'> { name } </span>
     </div>

     <div className="specificroom  m-8 grid grid-rows-2 ">
     
        <div className='w-full overflow-hidden my-12 md:grid md:grid-cols-2 md:gap-8 md:items-center'>

          <div className='object-cover w-[100%] h-[350px] my-8 rounded-2xl overflow-hidden'>
            <img className='w-full h-full' src = {img}  alt = {name} /> 
          </div>

        <div className='text-xl'> {about}  </div>
          <span className='grid grid-rows-3 mt-12 text-xl md:mt-0'>
            <div>  Adults - {adults}  </div>
            <div>  Bed Size - {bedSize}  </div>
            <div> No. of  Children - {children} </div>
          </span>
        </div>

        <div className='w-full grid grid-cols-2 md:py-4'>
            <div className='text-xl'>  Price - {price} </div>
            <div>
              <button  onClick={() => handleaddtocart({id,name,img,price})} className='py-2 px-8 bg-slate-500'>
                Add to Cart </button>
            </div>
        </div>

    </div>
    </>
  )
}

export default SpecificRoom