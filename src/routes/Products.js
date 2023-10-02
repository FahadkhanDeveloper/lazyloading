import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Products = () => {
  // search parameter or query parameter
  const [searchParams] = useSearchParams();
  // console.log(searchParams)
  // type in url /products?id=1&sort=asc
  // console.log(Object.fromEntries([...searchParams]))

  const obj = Object.fromEntries([...searchParams])
  // object is javascript built-in object Entries is array  and from this array we spread parameter and return at 
  // as object which we pass in routers
  return (
    <div>Products :{obj.sort}</div>
  )
}

export default Products