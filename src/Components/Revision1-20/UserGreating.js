import React from 'react';

class UserGreeting extends React.Component{
    constructor () {
        super();
        this.state = {
            isLogged: false,
        }
    }

    render() {


        return (
            <div>
                {this.state.isLogged?<p>wellocm Mohamed</p>:<p>wellocm gest hello</p>}
            </div>
        )
        // let message
        // if (this.state.isLogged) {
        //     message=   <p>wellocm Mohamed</p>
        // } else {
        //     message= <p>wellocm gest hello</p>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )



        // if (this.state.isLogged) {
        //     return   <p>wellocm Mohamed</p>
        // } else {
        //     return <p>wellocm gest hello</p>
        // }


        // return (
        //     <div>
        //         <p>wellocm gest hello</p>
        //         <p>wellocm Mohamed</p>

        //     </div>
        // );
    }
}
export default UserGreeting;