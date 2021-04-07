import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Component A getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Component A shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Component A getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component A componentDidUpdate")
    }
    
    handleName = () => {
        this.setState({name: "Skilvul"})
    }

    render() {
        console.log("Component A render")
        return (
            <div>
                Component A - {this.state.name}
                <ComponentB />
                <div>
                    <button onClick={this.handleName}>Change Name</button>
                </div>
            </div>
        )
    }
}

export default ComponentA