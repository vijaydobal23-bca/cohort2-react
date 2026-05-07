import React from 'react';
import { useContext } from 'react';
import { myContext } from './context/MyContext';

const Child = () => {
  const user = useContext(myContext)
  return (
    <div>
      {user.name}
      i am a child An the data is 
      
    </div>
  )
}

export default Child
