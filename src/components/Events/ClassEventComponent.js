import React, { Component } from 'react'

class ClassEventComponent extends Component {
    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default ClassEventComponent