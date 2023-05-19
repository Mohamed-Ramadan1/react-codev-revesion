import React from 'react';
import ChildeComp from './ChiledComponent';

class Parent extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            parentName:'parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(name) {
        alert(`Hello from parent Component ${this.state.parentName} yuor name is ${name}`)
    }

    render() {
        return (
            <div>
                <ChildeComp greetHandelr={this.greetParent} />

            </div>
        )
    }
}
export default Parent;