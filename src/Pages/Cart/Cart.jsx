import React from 'react'
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {

   const cartitems = useSelector((state) => state.filter.cart);
   console.log('cart items -',cartitems);

  return (
    <div className="cart-container m-16 ">
        <span>
          <h3> Total Cart Items-  {cartitems.length} </h3>  
        </span> 

        <div>
           {cartitems && cartitems.length > 0 ? 
           (cartitems.map((data) => {
              return (
                <>
                <div className='grid grid-cols-2' key = {data.id}>

                  <div className='bg-lime-300 p-4 '>  
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

                    </div>
                  </div>

                </div>
                </>
              )
           }) ) :
            (
            <>
              'No Items Present'
            </>) }
        </div>

    </div>
  )
}

export default Cart