import React from "react";

class Massage extends React.Component{
    constructor () {
        super();

        this.state = {
            massage:"Welcome click the button to subscripe"
        }
    }
    subscripe() {
        this.setState({massage:"Now you are member congrates~"})
    }
    render() {
        return (
            <div>
                <h1>{this.state.massage}</h1>
                <button onClick={()=>this.subscripe()}>Subscripe Now</button>
            </div>
        )
    }
}

export default Massage;