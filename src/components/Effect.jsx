import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [data, setdata]=useState([]);              
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response)=> {
      return Response.json();
    })
    .then((data)=>{
      setdata(data);
    })
    .catch((error) =>{
      console.log(error);
      
    });
  // dont use asynchawait inside useffect without declaring another fct beforehand, or else it will create mistakes
  }, [])
  return (
    <div>
      <h1>Post</h1>
     <ul>
      {
        data.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))
      }
     </ul>
    </div>
  )
}

export default Effect