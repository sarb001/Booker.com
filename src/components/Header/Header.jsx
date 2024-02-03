
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css' ;
import  { DateRangePicker } from  'react-date-range' ;
import { addDays } from 'date-fns';
import MOCKDATA from '../../data/MOCK_DATA (4).json';
import { GrSubtractCircle } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";

const Header = () => {

   const [state,setState] = useState([
     {
       startDate : new Date(),
       endDate   : new Date(),
       key       : 'selection'
     }
   ]);

    const [guests,setguests] = useState(
      {
        adult : 1,
        children : 2,
        room : 1
      }
    )


  return (
    <div className="header m-16">
      <div className='flex flex-row gap-20'>
    
        Using Date 
        <div>
           <DateRangePicker 
            onChange={item => setState([item.selection])}
            showSelectionPreview = {true}
            moveRangeOnFirstSelection = {false}
            months={1}
            ranges={state}
            direction='horizontal'
           />
        </div>

        <div>
          
          <div> 
            <span> Adult   </span> 
            <button className='border-red-700 border-2 '>  <GrSubtractCircle /> </button> 
              {guests.adult}
            <button className='border-black   border-2 '> <IoAddCircle /> </button> 
          </div>

          <div> 
          <span> Children   </span> 
            <button  className='border-red-700 border-2 '>  <GrSubtractCircle /> </button> 
                {guests.children} 
            <button className='border-black border-2 '>  <IoAddCircle /> </button> 
          </div>

          <div>
          <span> Room  </span> 
           <button className='border-red-700 border-2 '>  <GrSubtractCircle /> </button> 
            {guests.room}
          <button className='border-black border-2 '>  <IoAddCircle /> </button> 
          </div>

        </div>

    </div>
    </div>
  )
}

export default Header