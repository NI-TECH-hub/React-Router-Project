
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams()
  return (
    <div className='text-3xl bg-blue-950 text-white font-semibold text-center p-5 mt-5 mb-20'>User:{userid}</div>
  )
}

export default User