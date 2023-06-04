import React  from "react";

class RefsDemo extends React.Component{
    constructor () {
        super();

        this.inputRefs = React.createRef();

        this.cbRef = null;

        this.setCbRef = (el) => {
            this.cbRef = el;
        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }

        // this.inputRefs.current.focus();
        // console.log("ref is testeed")
    }

    clickHandeler = () => {
        const val = this.cbRef.value;
        alert(val);
        console.log(val)
    }

    render() {
        return (
            <div>
                {/* <input type="text" ref={this.inputRefs} /> */}
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandeler}>Clikc Me</button>
            </div>
        )
    }
}

export default RefsDemo;