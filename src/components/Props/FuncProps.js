const FuncProps = (props) => {
    return (
        <>
            <h1>Welcome to {props.name}</h1>
            <div>
                <h3>List of courses</h3>
                <p>{props.course.basic}</p>
                <p>{props.course.advance}</p>
                <p>{props.course.expert}</p>
            </div>
            <h1>Your course is {props.children}</h1>
            <button onClick={() => props.click("Children Functional Component")}>Click Me</button>
        </>
    )
}

export default FuncProps