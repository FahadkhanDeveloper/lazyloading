import React from 'react'

// useParams is used to pass data to routers in url  it is dynamic parameter
import { useParams, useNavigate } from 'react-router-dom'
// useNavigate is used to navigate to page means you can go from one page to another
const Product = () => {
  // it is actually object
  // const obj=useParams();
  // const pid = obj.pid;

  // here we destructure it
  const {pid} = useParams();

  const navigation = useNavigate();
  return (
    <div>
      Product :{pid}
      <p>Select * from products where p_id= {pid}</p>

      <button style={{width:200, height:200, backgroundColor:'red', color:'white'}} onClick={() => {
           navigation(-1)
          //  -1 means back to that page from where you come
          // Navigate("/")
          // it will be navigate to home page
      }}>BACK</button>
      
      </div>
  )
}

export default Product