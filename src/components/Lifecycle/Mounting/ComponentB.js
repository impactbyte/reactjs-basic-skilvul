import React, { Component } from 'react'

class ComponentB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log("Component B constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Component B getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Component B componentDidMount")
    }
    
    render() {
        console.log("Component B render")
        return (
            <div>
                Component B
            </div>
        )
    }
}

export default ComponentB