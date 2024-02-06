import React, { useEffect, useState } from 'react'
import './Navbar.css' ;
import { FaShoppingCart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
   const [showlink,setshowlink] = useState(true);

   const cartitems = useSelector((state) => state.filter.cart);
   console.log('cart item length- ',cartitems.length);

   const handlelinks = () => {
     setshowlink(!showlink);
   }  
   

  return (
    <>
       <div className="w-full">
        <nav className='bg-teal-200 md:bg-red-600  lg:bg-blue-600 
        w-full h-full p-4'>
          
            <div className='
             flex justify-between items-center
             lg:flex lg:justify-around lg:items-center
             md:flex md:justify-around md:items-center '>
              
              <div> 
                <a href = "/" > Bookr </a>
              </div>
              
              <div className='lg:block'> 
                  <ul className={`flex flex-col absolute  top-[70px] w-[370px] right-0
                      md:top-0 md:flex  md:flex-row md:w-full  md:static 
                       
                      ${showlink ? "hidden" : "block" }
                      lg:grid lg:grid-cols-4 lg: ` 
                  
                  }>
                      <li className='m-4'>   <a href = "/">        Home </a>  </li>
                      <li className='m-4'>   <a href = "/gallery"> Gallery </a>  </li>
                      <li className='m-4'>   <a href = "/contact"> Contact </a>  </li>
                  </ul>
              </div>

              <div className=' md:block lg:block xl:grid-rows-2 xl:grid  absolute right-16  md:static md:right-0'>
                <span> {cartitems.length} </span>   
                <span>  
                <Link to = "/cart" className='text-4xl'> 
                <FaShoppingCart /> </Link>
                </span>
              </div>
            
              <div className='block md:hidden relative' onClick={handlelinks}>
                <a href = "#" className='text-4xl'> {showlink ?  <GiHamburgerMenu />  : <MdCancel /> }  </a>
              </div>

            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar