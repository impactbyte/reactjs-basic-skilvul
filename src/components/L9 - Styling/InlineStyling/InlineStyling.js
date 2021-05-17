import React, { Component } from 'react'

let style = {
    color: "red", 
    fontSize: "5em"    
}

class InlineStyling extends Component {
    render() {
        return (
            <div>
                <h1 style={style}>Skilvul</h1>
            </div>
        )
    }
}

export default InlineStyling