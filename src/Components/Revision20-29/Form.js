import React from 'react';


class Form extends React.Component{
    constructor () {
        super();

        this.state = {
            userName: "",
            comments: '',
            topic:'react'
        }
    
    }

    handelUserName = (ev) => {
        this.setState({
            userName:ev.target.value
        })
    }

    handelTextArea = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handelTopics = (event) => {
        this.setState({
            topic:event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                <label>UserName</label>
                <input
                    type='text'
                    value={this.state.userName}
                    onChange={this.handelUserName} />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handelTextArea}
                    ></textarea>
                </div>

                <div>
                    <select value={this.state.topic} onChange={this.handelTopics}>
                        <option value='react'>React</option>
                        <option value='vue'>vue</option>
                        <option value='anguler'>anguler</option>
                    </select>
                </div>
            </form>

        );
    }
}

export default Form