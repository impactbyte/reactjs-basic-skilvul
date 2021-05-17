import React from "react"

const CreateElement = () => {
    return React.createElement("div", {id: "hello-world", className: "element-hello"}, React.createElement("h1", null, "Hello World"))
}

export default CreateElement