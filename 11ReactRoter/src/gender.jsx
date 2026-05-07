import React from 'react'
import { Link ,Outlet} from 'react-router-dom';

const Gender = () => {
  return (
    <div>
      <h1><Link to= "male">Male</Link></h1>
     <h1><Link to= "/gender/female">female</Link>  </h1>
     <Outlet/>
    </div>

  )
}

export default Gender;