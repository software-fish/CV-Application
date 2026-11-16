import { ValidationMessage } from "./ValidationMessage"

function Educational(props) {
    return (
        <section style={{display: props.shouldDisplay ? "block" : "none"}} id="educational-exp" onChange={props.educationalChange}>
            <label htmlFor="school">School Name: </label>
            <input type="text" id="school" name="school" />
            <ValidationMessage msg={props.educationalValidation.school} />
            <label htmlFor="title">Title of study: </label>
            <input type="text" id="title" name="title" />
            <ValidationMessage msg={props.educationalValidation.title} />
            <label htmlFor="date">Date of study: </label>
            <input type="date" id="date" name="date" />
            <ValidationMessage msg={props.educationalValidation.date} />
        </section>
    )
}

export { Educational }