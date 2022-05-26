import { useState,useEffect } from "react";


export default function useFetch(url) {
  const [response,setResponse]=useState(null);
  const [error, setError]=useState(null);
  
  useEffect(()=>{
   const fetchData=async()=>{
     try{
       const res=await fetch(url)
       const jsonResponse=await res.json();
       setResponse(jsonResponse)
     }catch(error){
        setError(error)
     }
   }
   fetchData();
  },[])
  
   return {response,error}
}
