import React from "react";

class ClickCounter extends React.Component{
    constructor () {
        super();
        this.state = {
            counter:0,
        }
    }
    icrementCounter = () => {
        this.setState(prev => {
            return{ counter: prev.counter + 1 }
        })
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <button onClick={this.icrementCounter}>Click { counter} times</button>
            </div>
        )
    }
}

export default ClickCounter;