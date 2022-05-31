import { Component } from "react"

export const HigherOrderComponent =(NewCounter)=>{
   class Counter extends Component{
       constructor(){
           super();
           this.state={
               counter:0
           }
           this.increment=this.increment.bind(this)
       }
       increment(){
           this.setState({counter:this.state.counter+1})
       }
       render(){
         return  <NewCounter count={this.state.counter}
                  increment={this.increment}/>
       }
   }
   return Counter
}