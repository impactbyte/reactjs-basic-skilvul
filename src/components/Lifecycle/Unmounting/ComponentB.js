import React, { Component } from 'react'

class ComponentB extends Component {
    componentWillUnmount() {
        console.log("Component B componentWillUnmount")
        alert("Component B will unmount")
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