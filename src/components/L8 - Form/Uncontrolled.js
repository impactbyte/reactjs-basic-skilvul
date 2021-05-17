import React, { Component, createRef } from 'react'

class Uncontrolled extends Component {
    constructor(props) {
        super(props)
        
        this.refName = createRef()
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.refName)
        alert(`My name is ${this.refName.current.value}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: <input type="text" ref={this.refName} /></label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Uncontrolled
