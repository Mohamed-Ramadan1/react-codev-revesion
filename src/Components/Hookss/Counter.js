import React from 'react'

class Counter extends React.Component{
    constructor () {
        super()
        this.state = {
            counter: 0
        }
    }
        clickHandelr = () => {
            this.setState((prev) => ({
                counter: prev.counter + 1
            }));
    
        }
    
        render(){
            return (
                <div>
                    <h1>The couner value is : {this.state.counter}</h1>
                    <button onClick={this.clickHandelr}>Increes the counter 1</button>
                </div>
            )
        }
}
    
export default Counter;
