import React from "react";

class Massage extends React.Component{
    constructor () {
        super();

        this.state = {
            massage:"Welcome"
        }
    }
    render() {
        return (
            <div>
                <h1>{ this.state.massage}</h1>
            </div>
        )
    }
}

export default Massage;