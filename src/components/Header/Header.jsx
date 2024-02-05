
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
        
        const [openDate,setopenDate] = useState(false);

        const handledates = () => {
           setopenDate(!openDate);
        }

  return (
    
    <div className="header m-16">

      <div className='flex flex-row gap-40'>

         <div  onClick={handledates}   className = 'relative bg-slate-500 p-2 w-[50%] h-[20%] flex flex-row justify-evenly'>
          <div>  {date[0].startDate.toLocaleDateString()} </div>
          <div>  {date[0].endDate.toLocaleDateString()} </div>

         <div className='absolute top-5'>
            { openDate && (
              <DateRangePicker 
              onChange={item => setdate([item.selection])}
              showSelectionPreview = {true}
              moveRangeOnFirstSelection = {false}
              months={1}
              ranges={date}
              direction='horizontal'
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