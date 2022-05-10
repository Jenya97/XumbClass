import React, { useState, useReducer, useEffect } from "react";
import ContextTwo from "./ContextTwo";
import Example from "./Example";
import { reducer } from "./reducer";

function App() {
  // const [count,setCount]=useState(0)
  const [count1,dispatch]=useReducer(reducer,80)
//   const [user, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState(null);
  const [number,setNumber]=useState('')
 
  // function add(){
  //     setCount(count+2)
  // }
//   useEffect(() => {
//     if (name) {
//       dispatch({
//         type: "ADD",
//         payload: name,
//       });
//     }
//   }, [name]);

  return (
    //   <ContextTwo.Provider value={{count,add}}>
    //   <Example/>
    //   </ContextTwo.Provider>
    <>
      <p>{count1}</p>
    <button onClick={()=>dispatch({
                        type:'INCREMENT',
                        payload:number
                        })}>+</button>
    <button onClick={()=>dispatch({type:'DECREMENT', payload:number})}>-</button>
    <button onClick={()=>dispatch({type:'RESET'})}>0</button>
     <button onClick={() => setNumber(prompt())}>tiv</button>
      {/* <button onClick={() => setName(prompt())}></button>
        {user && user.map(i=>(
          <p key={i.id}>{i.name}</p>
      ))} */}
    </>
  );
}

export default App;
