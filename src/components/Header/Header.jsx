
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
import { useDispatch, useSelector } from 'react-redux';
import { sortbyadults } from '../../Reducers/FIlterSlice';

const Header = () => {

   const [date,setdate] = useState([
     {
       startDate : new Date(),
       endDate   : new Date(),
       key       : 'selection'
     }
   ]);

    // const [guests,setguests] = useState(
    //   {
    //     adult : 0,
    //     children : 0,
    //     room : 0
    //   }
    // )

      const [room,setroom] = useState(0);     
      const dispatch   = useDispatch();
      const { adults , children } = useSelector(state => state?.filter);

      const [newadutls,setnewadutls] = useState(adults);     
      const [newchildren,setnewchildren] = useState(children);    

      console.log(' nweadult out -',newadutls);
      console.log(' new children out -',newchildren);

     const handleadults = (operation) => {
        setnewadutls(
           operation === 'i' ? newadutls + 1 : newadutls - 1
        )
      }
     

     const handlechildren = (operation) => {
      setnewchildren(
           operation === 'i' ? newchildren + 1 : newchildren - 1
        )
      }


      // const handleguests = (name,operation) => {
      //   setguests((prev) => {
      //      return {
      //       ...prev,
      //       [name] : operation === 'i' ? guests[name] + 1   : guests[name] - 1,
      //   }
      //   })
      // };
    
    const searchHotels = () => {
      console.log('button clicked 1 ',);
      console.log(' adult count 22 -', newadutls);
      dispatch(sortbyadults(newadutls));
      console.log('button clicked 2 ',);
    }

    const handleroom = () => {
        setroom();
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
            <button className='border-red-700 border-2 '  onClick={() => handleadults('d')}>  <GrSubtractCircle /> </button> 
              {newadutls}
            <button className='border-black   border-2 '  onClick={() => handleadults('i')}> <IoAddCircle /> </button> 
          </div>

          <div> 
          <span> Children   </span> 
            <button  className='border-red-700 border-2 '  onClick={() => handlechildren('d')}>  <GrSubtractCircle /> </button> 
                {newchildren} 
            <button className='border-black border-2 '     onClick={() => handlechildren('i')}>  <IoAddCircle /> </button> 
          </div>  

          <div>
          <span> Room  </span> 
           <button className='border-red-700 border-2 '   onClick={() => handleroom('room','d')}>  <GrSubtractCircle /> </button> 
            {room}
          <button className='border-black border-2 '      onClick={() => handleroom('room','i')}>  <IoAddCircle /> </button> 
          </div>

        </div>

        <div>
            <button className='bg-slate-600 px-6 py-2'  onClick={() => searchHotels()} > Search </button>
        </div>

     </div>
    </div>
  )
  }
export default Header