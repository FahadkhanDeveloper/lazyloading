import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Link to='/product/1'>Oven</Link>
      <Link to='/product/200'>Microwave</Link>
      <Link to='/product/300'>Machas</Link>
      
    </div>
  )
}

export default Home