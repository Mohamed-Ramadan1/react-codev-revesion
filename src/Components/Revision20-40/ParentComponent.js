import React from 'react';


class PaerntComponent extends React.Component{
    constructor () {
        super();
        this.state = {
            name:"Mohamed",
        }
    

    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                name:"Mohamed"
            })
        },2000)

        }
    render() {
        return (
            <div>
                Parent Component
            </div>
        )
    }
}

export default PaerntComponent;