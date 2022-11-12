
function Information(props) {
    const info = props.Information
    const {course, topic, id, name, college} = props.Information
    return(
        <>
            <h1>{info.course}</h1>
            <h2>{info.topic}</h2>
            <h3>{info.id}</h3>
            <h3>{info.name}</h3>
            <h4>{info.college}</h4>
        </>
    )
}

export default Information;