import React from 'react'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../../Reducers/FIlterSlice';

const Cart = () => {

   const cartitems = useSelector((state) => state.filter.cart);
   console.log('cart items -',cartitems);

   const dispatch = useDispatch();

   const removefromcart = (id) => {
       dispatch(removefromCart(id));
       console.log('removed done ');
   }

  return (
    <div className="cart-container m-16 ">

          <div className='w-[70%]' >
           {cartitems && cartitems.length > 0 ? 
           (cartitems.map((data) => {
              return (
                <>
              <span>
                <h3> Total Cart Items-  {cartitems.length} </h3>  
              </span> 

                <div className='grid grid-cols-2' key = {data.id}>

                  <div className='bg-lime-300 p-4 m-8 w-full'>  
                    <div className='flex flex-col'>

                      <div className='grid grid-cols-3 text-center'>
                        <span> Image  </span>
                        <span> Name   </span>
                        <span> Price  </span>
                      </div>

                      <div className='grid grid-cols-3 text-center'>
                        <div className = 'w-[100px] h-[100px]'  > 
                          <img className = 'w-full h-full object-cover' src = {data.img}  alt = "image" />
                        </div>

                        <div className='flex justify-center items-center'>
                          <div> {data.name} </div>
                        </div>

                        <div className='flex justify-center items-center'>
                          <div> {data.price} </div>
                        </div>
                      </div>

                      <div className='flex justify-end '>
                        <button className='m-1 p-2 bg-slate-600' onClick={() => removefromcart(data.id)}> Remove  </button>
                      </div>

                    </div>
                  </div>

                </div>

              <div className='w-[30%]'>
                      <h2> Payment Section </h2>
              </div>
                </>
              )
           }) ) :
            (
            <>
              'No Items Present'
            </>)}

          </div>

    </div>
  )
}

export default Cart