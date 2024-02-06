import React from 'react'
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {

   const cartitems = useSelector((state) => state.filter.cart);
   console.log('cart items -',cartitems);

  return (
    <div className="cart-container">
       Total Cart Items-  {cartitems.length}
    </div>
  )
}

export default Cart