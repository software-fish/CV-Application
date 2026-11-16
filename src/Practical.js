import { ValidationMessage } from "./ValidationMessage"

function Practical(props) {
    return (
        <section id="practical-exp" style={{display: props.shouldDisplay ? "block" : "none"}} onChange={props.practicalChange} >
            <label htmlFor="company">Company: </label>
            <input type="text" id='company' name='company' required />
            <ValidationMessage msg={props.practicalValidation.company} />
            <label htmlFor="position">Position title: </label>
            <input type="text" id='position' name='position' required />
            <ValidationMessage msg={props.practicalValidation.position} />
            <label htmlFor="mainResponsibility">Main Responsibility of your job: </label>
            <textarea name="main-responsibility" id="mainResponsibility" minLength="25"></textarea>
            <ValidationMessage msg={props.practicalValidation.mainResponsibility} />
            <label htmlFor="startDate">From: </label>
            <input type="date" id='startDate' name='start-date' required />
            <ValidationMessage msg={props.practicalValidation.startDate} />
            <label htmlFor="endDate">Until: </label>
            <input type="date" id='endDate' name='end-date' required />
            <ValidationMessage msg={props.practicalValidation.endDate} />
        </section>
    )
}

export { Practical }