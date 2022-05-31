import React, { Component } from 'react'
import { HigherOrderComponent } from './HOC/HigherOrderComponent'
class CounterHover extends Component{
    constructor(props){
    super()
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onMouseMove={this.props.increment}>move</button>
            </div>
        );
    }
}

export default HigherOrderComponent(CounterHover)