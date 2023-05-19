import React, { Component } from 'react';

class Counter extends Component {
    constructor () {
        super();


        this.state = {
            counter: 0,
        }
    }

    increement() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    increementFive() {
        this.setState({
            counter: this.state.counter + 5,
        })
    }
    Reset() {
        this.setState({
            counter:0
        })
    }
    decrementFive() {
        this.setState({
            counter:this.state.counter-5
        })
    }

    render() {
        return (
            <div>
                <p>Counter value is : {this.state.counter}</p>
                <button onClick={()=> this.increement()}>Incress Counter Value</button>
                <button onClick={()=> this.increementFive()}>Incress Counter Value 5</button>
                <button onClick={()=> this.Reset()}>Reset Counter</button>
                <button onClick={()=> this.decrementFive()}>decrementFive Counter</button>
            </div>
        )
    }
}

export default Counter;