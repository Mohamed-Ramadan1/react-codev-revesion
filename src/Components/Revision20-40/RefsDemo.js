import React  from "react";

class RefsDemo extends React.Component{
    constructor () {
        super();

        this.inputRefs = React.createRef();
    }

    componentDidMount() {
        this.inputRefs.current.focus();
        console.log("ref is testeed")
    }

    render() {
        return (
            <div>
                <input type="text" ref={ this.inputRefs} />
            </div>
        )
    }
}

export default RefsDemo;