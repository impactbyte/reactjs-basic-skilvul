import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            bool: false
        }
    }
    
    render() {
        return (
            <div>
                {this.state.bool ? <ComponentB /> : ""}
                <button onClick={() => this.setState({bool: !this.state.bool})}>Toggle Component B</button>
            </div>
        )
    }
}

export default ComponentA