import React, {useState} from 'react'

function FunctStateComponent({nama, skill}) {
    let [greeting, setGreeting] = useState("Hello World")

    const handleLogout = () => {
        setGreeting("Thank you for coming!")
    }

    return (
        <div>
            {greeting} - {nama} ({skill})
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default FunctStateComponent