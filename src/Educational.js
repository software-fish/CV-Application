function Educational(props) {
    return (
        <section id="educational-exp" onChange={props.educationalChange}>
            <label htmlFor="school">School Name: </label>
            <input type="text" id="school" name="school" />
            <label htmlFor="title">Title of study: </label>
            <input type="text" id="title" name="title" />
            <label htmlFor="date">Date of study: </label>
            <input type="date" id="date" name="date" />
        </section>
    )
}

export { Educational }