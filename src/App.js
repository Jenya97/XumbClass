import useToggle from "./CustomHook/useToggle";
import useFetch from "./CustomHook/useFetch";
import ReactLoading from 'react-loading';
import React from 'react'

export default function App() {
    const [visible,toggleVisibility]=useToggle(true)
    const res=useFetch('https://jsonplaceholder.typicode.com/users');
    
    if(!res.response){
      return  <ReactLoading color={'blue'} height={'20%'} width={'20%'} />
    }
  return (
    <div>
        {
         visible &&  <h2>custom hook</h2>
        }
        <button onClick={toggleVisibility}>toogle</button>
        {res && res.response.map(i=>(
            <li key={i.id}>{i.name}</li>
        ))}
    </div>
  )
}
