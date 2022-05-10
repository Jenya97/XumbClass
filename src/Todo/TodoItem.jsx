import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({id,task,checked}) {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
        <input type='checkbox' defaultChecked={checked}/>
        <p>{task}</p>
        <DeleteIcon/>
    </div>
  )
}
