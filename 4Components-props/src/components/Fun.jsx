import React from 'react'

const Fun = (props) => {
  return (
    <div>
      <button onClick={()=>{props.handleOnClick(1,2)}}>Cilick me </button>
    </div>
  )
}

export default Fun
