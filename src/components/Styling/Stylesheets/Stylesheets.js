import React, { Component } from 'react'
import "./Styles.css"

class Stylesheets extends Component {
    
    render() {
        let style = this.props.primary ? "welcome" : "";
        return (
            <div>
                <h1 className={style}>Hello Gaes</h1>
            </div>
        )
    }
}

export default Stylesheets