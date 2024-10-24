import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId} = useParams()
  return (
    <div className='text-center text-white bg-gray-500 p-4 text-xl'>User : {UserId}</div>
  )
}

export default User