import React, { Component } from 'react'

class ClassStateComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greeting: "Hello World",
            coin: 0
        }
    }
    
    tambahCoin = () => {
        const {coin} = this.state

        this.setState({
            coin: coin + 1
        })
    }

    render() {
        const {greeting, coin} = this.state
        const {nama, skill} = this.props
        return (
            <div>
                <h1>{greeting} {nama} - {skill}</h1>
                <h3>Coin: {coin}</h3>
                <button onClick={this.tambahCoin}>Tambah Coin</button>
            </div>
        )
    }
}

export default ClassStateComponent