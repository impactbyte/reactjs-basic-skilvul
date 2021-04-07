import React, { Component } from 'react'
import datas from "./data"

class ListRender extends Component {
    render() {
        let dataRendering = datas.map((data, i) => (
            <div key={data.key}>
                <h1>{i} - {data.nama}</h1>
                {data.skills.map((skill, i) => (
                    <p key={skill.key}>{skill.skill}</p>
                ))}
            </div>
        ))

        return (
            <div>
                {
                    dataRendering
                }
            </div>
        )
    }
}

export default ListRender