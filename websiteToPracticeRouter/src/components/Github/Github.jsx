import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Rendro1')
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setData(data);
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex'>
            <img src={data.avatar_url} alt="Loading" width={300} className='mr-10' />
            GitHub UserName : {data.name} 
            <br/>
            GitHub Followers : {data.followers}
            <br />
            GitHub Following : {data.following}
            <br />
            ID : {data.id}
            <br />
            Company : {data.company}
            <br />
            Bio : {data.bio==null? "NULL" : data.bio}
            <br />
            
    </div> 
  )
}

export default Github
