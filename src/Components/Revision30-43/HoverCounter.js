import React from "react";


class HoverCounter extends React.Component{
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
                <h2 onMouseMove={this.icrementCounter}>Hover {counter} Times</h2>
            </div>
        )
    }
}

export default HoverCounter;