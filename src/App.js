import FuncComp from "./FuncComp";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <FuncComp name="one" color="red"/> 
      <FuncComp name="two" color="blue"/> 
      <FuncComp name="three" color="grey"/> 
      <FuncComp name="four" color="pink"/> 
      <Menu/>
    </div>
  );
}

export default App;
