import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const SpecificRoom = () => {

    const geturlid = useParams();
    console.log(' url id ',geturlid);

  return (
    <div>SpecificRoomer -  </div>
  )
}

export default SpecificRoom