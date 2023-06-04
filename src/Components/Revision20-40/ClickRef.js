import React, { Component } from 'react'
import InputRef from './InputRef'

class ClickRef extends Component {
    constructor () {
        super();

        this.clikRef = React.createRef();
    }
    clickHandel = () => {
        this.clikRef.current.focusInput();
    
    }
    render() {
        return (
            <div>
                <InputRef ref={ this.clikRef} />
                <button onClick={this.clickHandel}>FocusInput</button>

            </div>
            )
        }
}

export default ClickRef
