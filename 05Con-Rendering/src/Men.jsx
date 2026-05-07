import React from 'react'

const Men = () => {
  const men1 = {
    type:"teen",
  }

  const men2 = {
    type:"adult"
  }


  if(men1.type =="teen"){
    return<h1>A boy is a male</h1>
  }

  else{
    return<h1>An Adult is a male</h1>
  }
}

export default Men
