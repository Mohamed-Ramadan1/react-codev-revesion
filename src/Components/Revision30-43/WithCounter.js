import React from 'react';


const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component{
            constructor () {
            super();
            this.state = {
                counter:0,
            }
        }
            
        icrementCounter = () => {
            this.setState(prev => {
                return{ counter: prev.counter + 1 }
            })
        }
        
        render() {
            return <OriginalComponent
                counter={this.state.counter}
                icrementCounter={this.icrementCounter}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent;