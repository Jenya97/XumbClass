import React,{ useReducer, useState} from 'react';
import reducer from './reducer';

export default function App() {
    const [counter,dispatch]=useReducer(reducer,10);
    const [val,setVal]=useState('');
  return (
    <div>
        {counter}
        <button onClick={()=>dispatch({
         type:'ADD',
         payload:val
          })}>add</button>
        <button onClick={()=>dispatch({
          type:'MINUS',
          payload:val
          })}>minus</button>
        <input type='text' onChange={(e)=>setVal(e.target.value)}/>
    </div>
  )
}
