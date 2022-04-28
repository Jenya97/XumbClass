import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const arr = [
  { name: "Home", id: 1 },
  { name: "About", id: 2 },
  { name: "Blog", id: 3 },
  { name: "Contact", id: 4 },
];

const Menu = () => {
  const [toggle, setToggle] = useState(true);
  //  const[display,setDisplay]=useState('none')
  // function closeOpen(){
  //     if(display==='none'){
  //         setDisplay('block')
  //     }else{
  //         setDisplay('none')
  //     }
  // }
  // display==='none' ? setDisplay('block') :
  // display==='block' ? setDisplay('flex') : setDisplay('grid')

  return (
    <div>
      {/* <MenuIcon onClick={closeOpen}/> */}

      <MenuIcon onClick={() => setToggle(!toggle)} />
      {/* <ul style={{display:display}}>
         {arr.map(i=>(
             <li key={i.id}>{i.name}</li>
         ))}
         </ul> */}
      {toggle ? (
        <ul>
          {arr.map((i) => (
            <li key={i.id}>{i.name}</li>
          ))}{" "}
        </ul>
      ) : null} 
      {toggle && <h2>jisht</h2>}
    </div>
  );
};

export default Menu;
