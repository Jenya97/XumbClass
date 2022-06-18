import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./Redux/Fetch/fetch";

export default function App() {
   const users=useSelector(state=>state);
   const dispatch=useDispatch();

   useEffect(()=>{
    dispatch(fetchUsers())
   },[])
  return (

    <div >
    {users.loading && <h2>loading</h2>} 
    {!users.loading && 
     users.data.data.map(i=>(
     <div key={i.id}>
       <h2>{i.first_name}</h2>
       <img src={i.avatar} alt=''/>
     </div>
   ))} 
    </div>
  )
}
