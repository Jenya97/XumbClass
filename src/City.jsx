import React, { Component,Fragment } from "react";

class City extends Component{
    constructor(props){
        super();
        this.state={
            count:0
        }
        // this.increment=this.increment.bind(this)
    }
    // increment(){
    //    this.setState({count:this.state.count+1}) 
    // }
   increment=()=>{
     this.setState({count:this.state.count+1}) 
    }
    
    render(){
        return(
          <div>
              <h2>{this.props.name}</h2>
              <p>{this.state.count}</p>
              <img src={this.props.src} alt="" />
             <button onClick={this.increment}>+</button>
             <button onClick={()=>this.setState({count:this.state.count+1})}>2+</button>
          </div>
        )
    }
}


export default City;
