import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
render() {
        return ( 
                <UserConsumer>
                    {
                        userName => {
                            return <div>Helo {userName}</div>
                        }
                    }
                </UserConsumer>
        )
    }
}

export default ComponentF
