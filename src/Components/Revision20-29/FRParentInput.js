import React from "react";
import FRinput from "./FRinput";
class FRPinputComponent extends React.Component{
    constructor (){
        super();

        this.inputRef = React.createRef();

    }
    clickHandelr = () => {
        this.inputRef.current.focus();
        
    }

    render() {
        return (
            <div>
                <FRinput ref={this.inputRef} />
                <button onClick={this.clickHandelr}>FocusInput</button>
            </div>
        )
    }

}

export default FRPinputComponent;