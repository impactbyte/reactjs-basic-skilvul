import React from 'react'

function FuncEventComponent() {
    const handleClick = () => {
        console.log(this)
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default FuncEventComponent
