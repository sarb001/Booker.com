
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css' ;
import  { DateRangePicker } from  'react-date-range' ;
import { addDays } from 'date-fns';
import { GrSubtractCircle } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { sortbyadults , sortbychildrens } from '../../Reducers/FIlterSlice';
import Search from '../SearhComponent/Search';

const Header = () => {

        const [date,setdate] = useState([
          {
            startDate : new Date(),
            endDate   : new Date(),
            key       : 'selection'
          }
        ]);
        

  return (
    
    <div className="header m-16">

      <div className='flex flex-row gap-40'>
    
         <div>
          <span>  Using Date </span> 
          <div>  Current Date - {date[0].startDate.toLocaleDateString()} </div>
          <div>  Last Date -    {date[0].endDate.toLocaleDateString()} </div>

         </div>

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
              <Search   />
        </div>

     </div>
    </div>
  )
  }
export default Header