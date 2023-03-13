
import { NavLink } from 'react-router-dom'
import React from 'react'

const Error = () => {
  return (
    <div>
        <h1>Error! Page not found</h1>
        <NavLink to='/'>Home Page</NavLink>
    </div>
  )
}

export default Error