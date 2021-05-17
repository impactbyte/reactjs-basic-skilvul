import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            display: true
        }
    }

    render() {
        return (
            <div>
                {/* 1. ternary operator */}
                {/* {
                    this.state.display ? (
                        <div>Selamat Datang</div>
                    ) : (
                        <div>Selamat Jalan</div>
                    )
                } */}
                {/* 2. short circuit operator */}
                {
                    <div>Selamat Datang</div> && this.state.display
                }
            </div>
        )
    }
}

export default ConditionalRender