import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate=useNavigate()
  return (
    <>
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button onClick={()=>navigate('/')}>Login</button>
    </>
  )
}

export default PageNotFound