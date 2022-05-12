import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Blog() {
    const [posts,setPosts]=useState([]);

   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>res.json())
       .then(post=>setPosts(post))
   },[])

  return (
    <div>
   {posts && posts.map(i=>(
       <Link key={i.id} to={`/blog/${i.id}`}>{i.title}</Link>
   ))}

    </div>
  )
}
