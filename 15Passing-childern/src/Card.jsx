import React from 'react'

const Card = (props) => {
  console.log(props.children)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Card;
