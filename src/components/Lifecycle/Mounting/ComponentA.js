import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log("Component A constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Component A getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Component A componentDidMount")
    }
    
    render() {
        console.log("Component A render")
        return (
            <div>
                Component A
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA