import { useState } from "react";



export default function useToggle(initialState=false) {
    const [visible,setVisible]=useState(initialState);

    const toggle=()=>setVisible((prev)=>!prev);

    return [visible,toggle]
}
