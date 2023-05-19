import React from 'react';

class BindEvent extends React.Component{
    constructor () {
        super();

        this.state = {
            massage:"you have to compelete your target"
        }
        this.changeMassage = this.changeMassage.bind(this);
    }

    changeMassage() {
        this.setState({ massage: "you cannot fail on your life" },
        ()=> console.log(this.state.massage))
    }


    render() {
        return (
            <div>
                <div>{ this.state.massage}</div>
                <button onClick={this.changeMassage}>Click</button>
            </div>

        )
    }
}

export default BindEvent;
