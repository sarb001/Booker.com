import React from 'react'
import './Navbar.css' ;
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
       <nav className ='bg-red-900 w-full h-full'>
          <div> 
             <a href = "#" className=''> Booker </a>
          </div>

          <div> 
             <ul> 
              <li> Home </li>
              <li> Gallery </li>
              <li> Rooms </li>
              <li> Contact </li>
            </ul>
          </div>

          <div>
             <a href = "#"> <FaShoppingCart /> </a>
          </div>
       </nav>
    </>
  )
}

export default Navbar