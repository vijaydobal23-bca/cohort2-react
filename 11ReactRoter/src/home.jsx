import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
        this is home page
      </h1>
      <Link to= "/gender">Gender</Link>
    </div>
  )
}

export default Home
