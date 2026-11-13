import React from 'react'

function General() {
    return (
        <section>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="number">Number: </label>
            <input type="number" id="number" name="number" />
        </section>
    )
}

export { General }