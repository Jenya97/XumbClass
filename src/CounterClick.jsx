import React, { Component } from 'react'
import { HigherOrderComponent } from './HOC/HigherOrderComponent'
class CounterClick extends Component{
    constructor(props){
    super()
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.increment}>click</button>
            </div>
        );
    }
}

export default HigherOrderComponent(CounterClick)