const containerStyles = (CVShouldDisplay) => {
   return {
        display: CVShouldDisplay ? "block" : "none",
        border: "1px solid black"
    }
}
const textStyles = { 
    fontWeight: "bold", 
    textAlign: "center",

}

function CV(props) {
    return (
        <div id="CV" style={containerStyles(props.CVShouldDisplay)}>
            <p style={textStyles}>{props.formData.name}</p>
            <p style={textStyles}>{props.formData.email}</p>
            <p style={textStyles}>{props.formData.number}</p>
            <p style={textStyles}>{props.formData.school}</p>
            <p style={textStyles}>{props.formData.title}</p>
            <p style={textStyles}>{props.formData.date}</p>
            <h3 style={{ textAlign: "center" }}>Experience</h3>
            <p style={textStyles}>Company: {props.formData.company}</p>
            <p style={textStyles}>My work position: {props.formData.position}</p>
            <p style={textStyles}>Experience: {props.formData.mainResponsibility}</p>
            <p style={textStyles}>Started: {props.formData.startDate}</p>
            <p style={textStyles}>Ended: {props.formData.endDate}</p>
        </div>
    )
}

export { CV }