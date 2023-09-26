
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
useLoaderData

function Github() {
    const data = useLoaderData()

//     const [data,setData] = useState([])

//   useEffect(()=>{
//     fetch(`https://api.github.com/users/Ni-Tech-Hub`)
//     .then(res => res.json())
//     .then(res => setData(res))
//   },[])

  return (
    <div className='bg-gray-800'>
        <h1 className='text-3xl p-5 bg-blue-950 mt-5 text-white text-center font-semibold'>GitHub: {data.login}</h1>
        <img width={400} height={300} className='p-10 mx-auto' src={data.avatar_url} alt="github profile pic" />

    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/Ni-Tech-Hub`)
    return res.json()

}