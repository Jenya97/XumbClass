import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
export default function Page5() {
    const {color}=useContext(Context) 
  return (
    <div style={{color:color}}>Page5</div>
  )
}
