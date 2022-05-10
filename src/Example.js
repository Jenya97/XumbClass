import ContextTwo from "./ContextTwo"

function Example() {
    
  return (
  <ContextTwo.Consumer>
   {({count,add})=>(
       <div>
           <p>{count}</p>
           <button onClick={add}></button>
       </div>
   )}
  </ContextTwo.Consumer>
  )
}

export default Example