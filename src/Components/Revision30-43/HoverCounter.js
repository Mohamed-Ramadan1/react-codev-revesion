import React from "react";
import UpdatedComponent from "./WithCounter";


class HoverCounter extends React.Component{

    render() {
        const { counter } = this.props;
        const { icrementCounter } = this.props;
        return (
            <div>
                <h2 onMouseMove={icrementCounter}>Hover {counter} Times</h2>
            </div>
        )
    }
}

export default UpdatedComponent (HoverCounter);