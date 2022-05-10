import { useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
function App() {
  const [val, setVal] = useState('');
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')))  
  function addTodo() {
    setTodo(
      [
        ...todo,
        {
          id: Date.now(),
          task: val,
          checked: false
        }
      ])
      setVal('')
  }
  
  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])

  return (
    <>
      <input type="text" value={val}
       onChange={(e) => setVal(e.target.value)}
       onKeyDown={(e) =>{
         if(e.key==='Enter'){
          addTodo()
         }
       }} />
      <button onClick={addTodo}>add</button>
      <TodoList todo={todo} />
    </>
  );
}

export default App;
