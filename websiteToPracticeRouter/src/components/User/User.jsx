import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      <h1>This is User and his/her userId is = {userid}</h1>
    </div>
  )
}

export default User
