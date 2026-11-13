function Practical(props) {
    return (
        <section id="practical-exp" onChange={props.practicalChange} >
            <label htmlFor="company">Company: </label>
            <input type="text" id='company' name='company' required />
            <label htmlFor="position">Position title: </label>
            <input type="text" id='position' name='position' required />
            <label htmlFor="mainResponsibility">Main Responsibility of your job: </label>
            <textarea name="main-responsibility" id="mainResponsibility" minLength="25"></textarea>
            <label htmlFor="startDate">From: </label>
            <input type="date" id='startDate' name='start-date' required />
            <label htmlFor="endDate">Until: </label>
            <input type="date" id='endDate' name='end-date' required />
        </section>
    )
}

export { Practical }