import React from 'react'
import { Link } from 'react-router-dom'


const PageNotFound = () =>  {
  return (
    <div>
      <p>404 Page Not Found</p>
      <Link to='/' >
        <button className='btn'>
          Go To Home
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound