import React from "react"
import { General } from "./General"
import { Educational } from "./Educational"
import { Practical } from "./Practical"

function CVApp() {
    const [CVInfo, setCVInfo] = React.useState({
        name: '',
        email: '',
        number: '',
        school: '',
        title: '',
        date: '',
        company: '',
        position: '',
        mainResponsibility: '',
        startDate: '',
        endDate: '',
    })

    const handleChange = ({ target }) => {
        setCVInfo({ 
            ...CVInfo,
            [`${target.id}`]: target.value
         })
    }

    return (
        <form>
            <General generalChange={handleChange} />
            <Educational educationalChange={handleChange} />
            <Practical practicalChange={handleChange} />
        </form>
    )
}

export { CVApp }