import React from 'react'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../../Reducers/FIlterSlice';

const Cart = () => {

   const cartitems = useSelector((state) => state.filter.cart);
   console.log('cart items  all -',cartitems);

   const dispatch = useDispatch();

   const removefromcart = (id) => {
       dispatch(removefromCart(id));
       console.log('removed done ');
   }

  return (
    <div className="cart-container m-4 xl:m-16">
              <div>
                <span className='text-3xl'> Total Cart Items-  {cartitems.length} </span>  
              </div> 

            <div className='flex flex-col-reverse gap-7
            md:grid md:grid-cols-2 md:gap-4
            xl:grid xl:grid-cols-2  xl:gap-8 xl:flex-wrap'>

              <div className='w-[100%] xl:w-[75%]'>
              {cartitems && cartitems.length > 0 ? 
                (cartitems.map((data) => {
                    return (
                      <>
                      <div className='flex flex-col' key = {data.id}>

                            <div className='bg-lime-300 m-2 p-2 w-full'>  
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
                      </>
                    )
                }) ) :
                  (
                  <>
                    'No Items Present'
                  </>)
               }
              </div>

              <div className='xl:w-[35%] xl:px-4'>
                  <div className='text-3xl'> Payment Section </div>
              </div>
          </div>

    </div>
  )
}

export default Cart