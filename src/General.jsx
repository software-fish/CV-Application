import { ValidationMessage } from "./ValidationMessage"

function General(props) {
    return (
        <section id="general-exp" style={{display: props.shouldDisplay ? "block" : "none"}} onChange={props.generalChange}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" />
            <ValidationMessage msg={props.generalValidation.name} />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
            <ValidationMessage msg={props.generalValidation.email} />
            <label htmlFor="number">Number: </label>
            <input type="number" id="number" name="number" />
            <ValidationMessage msg={props.generalValidation.number} />
        </section>
    )
}

export { General }