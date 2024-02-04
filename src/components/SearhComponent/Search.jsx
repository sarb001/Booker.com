import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sortbyadults, sortbychildrens } from '../../Reducers/FIlterSlice';
import { IoAddCircle } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom' ;

const Search = () => {

    const [room,setroom] = useState(0);     
    const dispatch   = useDispatch();
    const navigate = useNavigate();
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

  const searchHotels = () => {
    dispatch(sortbyadults(newadutls));
    dispatch(sortbychildrens(newchildren));
    navigate('/rooms');
  }

  const handleroom = () => {
      setroom();
  }

  return (
    <div className="search">

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

              <div>
                  <button className='bg-slate-600 px-6 py-2'  onClick={() => searchHotels()} > Search </button>
              </div>
    </div>
  )
}

export default Search