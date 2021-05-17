import React, { Component } from 'react'

class ComponentB extends Component {
    componentDidUpdate() {
        console.log("Component B componentDidUpdate")
    }

    render() {
        return (
            <div>
                Component B
            </div>
        )
    }
}

export default ComponentB