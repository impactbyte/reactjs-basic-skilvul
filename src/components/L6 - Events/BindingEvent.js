import React, { Component } from 'react'

class BindingEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: "Hello Gaes"
        }

        // this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e, param){
        this.setState({
            text: param
        })
        console.log(e)
        console.log(param)
    }

    render() {
        const {text} = this.state

        return (
            <div>
                <div>{text}</div>
                {/* 1. inline callback */}
                <button onClick={(e) => this.handleClick(e, "hallo")}>Rubah State</button>
                {/* 2. inline binding */}
                {/* <button onClick={this.handleClick.bind(this)}>Rubah State</button> */}
                {/* 3. constructor binding */}
                {/* <button onClick={this.handleClick}>Rubah State</button> */}
                {/* 4. using arrow function */}
                {/* <button onClick={this.handleClick}>Rubah State</button> */}
            </div>
        )
    }
}

export default BindingEvent