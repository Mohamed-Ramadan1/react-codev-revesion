import React from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends React.Component{


    render() {
            const { counter } = this.props;
            const { icrementCounter } = this.props;
        
        return (
            <div>
                <button onClick={icrementCounter}>Click { counter} times</button>
            </div>
        )
    }
}

export default UpdatedComponent( ClickCounter);