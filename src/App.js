import FuncComp from "./FuncComp";
import Menu from "./Menu";
import Page1 from "./Pages/Page1";
import UseEffectExample from "./UseEffectExample";
import {useState} from 'react';
import {Context} from './Context'
function App() {
  const [color,setColor]=useState('pink')
  const [counter,setCounter]=useState(10)
  return (
    <>
    <button onClick={()=>setColor('green')}>green</button>
    <button onClick={()=>setCounter(counter+1)}>add</button>
    <Context.Provider value={{color,counter}} >
      <Page1/>
    </Context.Provider>
    </>
  );
}

export default App;
