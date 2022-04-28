import React from 'react'
import Page5 from './Page5'
import { Context } from '../Context'
import { useContext } from 'react'
export default function Page4() {
    const {counter}=useContext(Context) 
  return (
    <div>
        Page4
    <p>{counter}</p>
        <Page5/>
    </div>

  )
}
