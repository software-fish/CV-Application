import React from "react"
import { General } from "./General"
import { Educational } from "./Educational"
import { Practical } from "./Practical"
import { AddInfo } from "./AddInfo"

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
    const [addGeneral, setAddGeneral] = React.useState(false)
    const [addEducational, setAddEducational] = React.useState(false)
    const [addPractical, setAddPractical] = React.useState(false)

    const handleChange = ({ target }) => {
        setCVInfo({ 
            ...CVInfo,
            [`${target.id}`]: target.value
         })
    }

    const handleClick = ({ target }) => {
        switch (target.id) {
            case "general":
                setAddGeneral(true)
            break

            case "educational":
                setAddEducational(true)
            break

            case "practical":
                setAddPractical(true)
            break
        }
    }

    return (
        <form>
            <AddInfo category="general" info="General Information" whenClicked={handleClick} />
            <General shouldDisplay={addGeneral} generalChange={handleChange} />
            <AddInfo category="educational"  info="Educational Experience" whenClicked={handleClick} />
            <Educational shouldDisplay={addEducational} educationalChange={handleChange} />
            <AddInfo category="practical" info="Practical Experience" whenClicked={handleClick} />
            <Practical shouldDisplay={addPractical} practicalChange={handleChange} />
        </form>
    )
}

export { CVApp }