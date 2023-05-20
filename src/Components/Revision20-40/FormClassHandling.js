import React from 'react'


class FormClassHandling extends React.Component{
    constructor () {
        super();

        this.state = {
            userName: '',
            password: '',
            email:''
        }

    }
    handelUserName=(e)=> {
        this.setState({
            userName: e.target.value, 
        })
    }
    handelEmailChange=(e)=> {
        this.setState({
            email: e.target.value, 
        },()=>console.log(this.state.email))
    }

    handelPasswordFaild=(e)=> {
        this.setState({
            password: e.target.value, 
        },()=>console.log(this.state.password))
    }

    render() {
       // const { userName, password, email } = this.state;
        return (
            <div>
                <form>
                    <label>UserName</label>
                    <input
                        type='text'
                        value={this.state.userName}
                        onChange={this.handelUserName}
                    />
                    <label>password</label>
                    <input
                        onChange={this.handelPasswordFaild}
                        type='password'
                        value={this.state.password}
                    />
                    <label>Email</label>
                    <input
                        onChange={this.handelEmailChange}
                        type='emali'
                        value={this.state.email}
                    />
                </form>
            </div>
        )
    }
}

export default FormClassHandling;