import React, { Component } from 'react'

class ClassProps extends Component {
    render() {
        return (
            <>
                <h1>Welcome to {this.props.name}</h1>
                <div>
                    <h3>List of props</h3>
                    <p>{this.props.course.basic}</p>
                    <p>{this.props.course.advance}</p>
                    <p>{this.props.course.expert}</p>
                </div>
                <h1>Your course is {this.props.children}</h1>
                <button onClick={() => this.props.click("Childern")}>Click Me</button>
            </>
        )
    }
}

export default ClassProps