import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sortbyadults, sortbychildrens, sortbyrooms } from '../../Reducers/FIlterSlice';
import { IoAddCircle } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom' ;

const Search = () => {

  const dispatch   = useDispatch();
  const navigate = useNavigate();
  const { adults , children  , numberofrooms } = useSelector(state => state?.filter);
  
    const [room,setroom] = useState(numberofrooms);     
    const [newadutls,setnewadutls] = useState(adults);     
    const [newchildren,setnewchildren] = useState(children);    

    console.log(' rooms in  -',room);
    console.log(' new adults in -',newadutls);
    console.log(' new children in -',newchildren);

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
      dispatch(sortbyrooms(room));
      navigate('/rooms');
    }

  const handleroom = (operation) => {
      setroom(
        operation === 'i' ? room + 1 : room - 1
    )
  }

  return (
    <div className="search">

              <div> 
                <span> Adult   </span> 
                <button 
                 disabled = {newadutls <=1}
                className='border-red-700 border-2 '  onClick={() => handleadults('d')}> 
                 <GrSubtractCircle /> 
                </button> 
                  {newadutls}
                <button className='border-black   border-2 '  onClick={() => handleadults('i')}> 
                 <IoAddCircle /> 
                </button> 
              </div>

              <div> 
              <span> Children   </span> 
                <button 
                   disabled = {newchildren <= 1 }
                className='border-red-700 border-2 '  onClick={() => handlechildren('d')}>  <GrSubtractCircle /> </button> 
                    {newchildren} 
                <button className='border-black border-2 '     onClick={() => handlechildren('i')}>  <IoAddCircle /> </button> 
              </div>  

              <div>
              <span> Room  </span> 
              <button 
              disabled = {room <= 1 }
              className='border-red-700 border-2 '   onClick={() => handleroom('d')}>  <GrSubtractCircle /> </button> 
                {room}
              <button className='border-black border-2 '      onClick={() => handleroom('i')}>  <IoAddCircle /> </button> 
              </div>

              <div>
                  <button className='bg-slate-600 px-6 py-2'  onClick={() => searchHotels()} > Search </button>
              </div>
    </div>
  )
}

export default Search