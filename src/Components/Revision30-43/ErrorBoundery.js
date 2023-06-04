import React, { Component } from 'react'
import Heros from './Hero'

class ErrorBoundery extends Component {
    constructor () {
        super()
        this.state = {
            hasError:false,
        }
    }
   static  getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>Error HAPPEDN</h1>

        } 
        return this.props.children
    }
}

export default ErrorBoundery;
