
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css' ;
import  { DateRange  } from  'react-date-range' ;
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
        
        const [openDate,setopenDate] = useState(false);

        const handledates = () => {
           setopenDate(!openDate);
        }

  return (
    
    <div className="header m-16">

      <div className='flex flex-col gap-12 items-center'>

         <div  onClick={handledates}   className = 'relative bg-slate-500 p-2 w-[50%] h-[20%] flex flex-row justify-evenly'>
          <div>  {date[0].startDate.toLocaleDateString()} </div>
          <div>  {date[0].endDate.toLocaleDateString()} </div>

         <div className='absolute top-16  left-0 '>
            { openDate && (
              <DateRange
                editableDateInputs = {true}
                onChange={item => setdate([item.selection])}
                moveRangeOnFirstSelection = {false}
                ranges={date}
              />
              )
            }
          </div>
            </div>

         <div className='searchbar'>
              <Search   />
        </div>

     </div>
      
    </div>
  )
  }
export default Header