import React, { Component } from 'react'

class SuffleData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            chars: [{key: 1, name: "Eren"}, {key: 2, name: "Mikasa"}, {key: 3, name: "Armin"}]
        }

        this.handleAcak = this.handleAcak.bind(this)
    }

    // Fisher-Yates (aka Knuth) algorithm
    acakAlgoritma(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleAcak() {
        this.setState({
            chars: this.acakAlgoritma(this.state.chars)
        })
    }
    
    render() {
        const {chars} = this.state

        return (
            <div>
                {chars.map((char, i) => (
                    <div key={char.key}>
                        <h1>{char.name}</h1>
                        <input type="text" placeholder="Masukkan Nama Belakang" />
                    </div>
                ))}
                <hr/>
                <div>
                    <button onClick={this.handleAcak}>Acak</button>
                </div>
            </div>
        )
    }
}

export default SuffleData