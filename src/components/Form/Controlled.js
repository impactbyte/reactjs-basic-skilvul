import React, { 
    Component, 
    // createRef 
} from 'react'

class Controlled extends Component {
    constructor(props) {
        super(props)
        
        // this.refName = createRef()
        this.state = {
            name: ""
        }
    }

    handleName = (e) => {
        // console.log(e.target.value)
        let name = e.target.value
        this.setState({
            name: name + "@mail.com"
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.refName)
        // alert(`My name is ${this.refName.current.value}`)
        // console.log(this.state.name)
        alert(`My name is ${this.state.name}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: <input type="text" onChange={this.handleName} /></label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled
