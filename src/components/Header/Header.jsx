
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

   const [date,setdate] = useState([
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

    const handleguests = (name,operation) => {
      setguests((prev) => {
         return {
          ...prev,
          [name] : operation === 'i' ? guests[name] + 1   : guests[name] - 1,
      }
      })
    }

    console.log('total guests 1-',guests);
    console.log('date is --',date);

    const searchHotels = () => {
        
    }


  return (
    <div className="header m-16">
      <div className='flex flex-row gap-10'>
    
        Using Date
        <h2>  Current Date - {date[0].startDate.toLocaleDateString()} </h2>
        <h2>  Last Date -  {date[0].endDate.toLocaleDateString()} </h2>
         
        <div>
           <DateRangePicker 
            onChange={item => setdate([item.selection])}
            showSelectionPreview = {true}
            moveRangeOnFirstSelection = {false}
            months={1}
            ranges={date}
            direction='horizontal'
           />
        </div>

        <div>

          <div> 
            <span> Adult   </span> 
            <button className='border-red-700 border-2 '  onClick={() => handleguests('adult','d')}>  <GrSubtractCircle /> </button> 
              {guests.adult}
            <button className='border-black   border-2 '  onClick={() => handleguests('adult','i')}> <IoAddCircle /> </button> 
          </div>

          <div> 
          <span> Children   </span> 
            <button  className='border-red-700 border-2 '  onClick={() => handleguests('children','d')}>  <GrSubtractCircle /> </button> 
                {guests.children} 
            <button className='border-black border-2 '     onClick={() => handleguests('children','i')}>  <IoAddCircle /> </button> 
          </div>  

          <div>
          <span> Room  </span> 
           <button className='border-red-700 border-2 '   onClick={() => handleguests('room','d')}>  <GrSubtractCircle /> </button> 
            {guests.room}
          <button className='border-black border-2 '      onClick={() => handleguests('room','i')}>  <IoAddCircle /> </button> 
          </div>

        </div>

        <div>
            <button className='bg-slate-600 px-6 py-2 '  onClick={() => searchHotels()} > Search </button>
        </div>

    </div>
    </div>
  )
}

export default Header