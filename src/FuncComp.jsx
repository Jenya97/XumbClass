import {useState} from 'react'

function FuncComp({name,color}){
    const [count,setCounter]=useState(10)
    function increment(){
        setCounter(count+1)
    }
 
    return(
        <>
        {count}
        <button onClick={increment}>+</button>
        <button onClick={()=>setCounter(count-1)}>-</button>
        <h2 style={{color:color}}>{name}</h2>
        </>
    )
}

export default FuncComp;

