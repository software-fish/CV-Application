import React from 'react'

function Practical() {
    return (
        <section>
            <label htmlFor="company">Company: </label>
            <input type="text" id='company' name='company' required />
            <label htmlFor="position">Position title: </label>
            <input type="text" id='position' name='position' required />
            <label htmlFor="main-responsibility">Main Responsibility of your job: </label>
            <textarea name="main-responsibility" id="main-responsibility" minLength="25"></textarea>
            <label htmlFor="start-date">From: </label>
            <input type="date" id='start-date' name='start-date' required />
            <label htmlFor="end-date">Until: </label>
            <input type="date" id='end-date' name='end-date' required />
        </section>
    )
}

export { Practical }