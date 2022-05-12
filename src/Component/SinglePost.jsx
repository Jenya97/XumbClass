import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [singlePost,setSinglePost]=useState(null)
 useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(post=>setSinglePost(post))
 },[id])

  return (
      <>
      {singlePost && 
      <>
      <h1>{singlePost.title}</h1>
      <p>{singlePost.body}</p>
      </>
      }
      </>
  )
}
