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
    const [messages, setMessages] = React.useState({
        forName: '',
        forEmail: '',
        forNumber: '',
        forSchool: '',
        forTitle: '',
        forDate: '',
        forCompany: '',
        forPosition: '',
        forMainResponsibility: '',
        forStartDate: '',
        forEndDate: '',
    })

    const inputCheckValidity = (target) => {
        const firstLetter = target.id.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = target.id.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters

        if (!CVInfo[target.id].trim()) {
            setMessages(prevMessages => {
                return {
                    ...prevMessages,
                    [`for${capitalizedWord}`]: "This field cannot be empty."
                }
            })
        } else {
            setMessages(prevMessages => {
                return prevMessages[`for${capitalizedWord}`] ? {
                    ...prevMessages,
                    [`for${capitalizedWord}`]: ""
                } : prevMessages
            })
        }

        console.log(target.id === "email")

        if (target.id === "email") {
            if (!CVInfo[target.id].includes("@")) {
                setMessages(prevMessages => {
                    return {
                        ...prevMessages,
                        forEmail: "Email adresses cannot omit @."
                    }
                })
            } else {
                setMessages(prevMessages => {
                    return {
                        ...prevMessages,
                        forEmail: ""
                    }
                })
            }
        }
    }

    const submitCheckVailidty = () => {
        const CVValues = Object.values(CVInfo)
        const messageKeys = Object.entries(messages)
        let howManyPassed = CVValues.length - 1
        let canFormPass = false

        for (let i = 0; i < CVValues.length; i++) {
            if (!CVValues[i].trim()) {
                setMessages(prevMessages => {
                    return {
                        ...prevMessages,
                        [`${messageKeys[i][0]}`]: "This field cannot be empty."
                    }
                })

                howManyPassed--
            } else {
                setMessages(prevMessages => {
                    return prevMessages[`${messageKeys[i][0]}`] ? {
                        ...prevMessages,
                        [`${messageKeys[i][0]}`]: ""
                    } : prevMessages
                })

                howManyPassed++
            }
        }

        if (!CVInfo.email.includes("@")) {
            setMessages(prevMessages => {
                return {
                    ...prevMessages,
                    forEmail: "Email adresses cannot omit @."
                }
            })

            canFormPass = false
        } else {
            setMessages(prevMessages => {
                return {
                    ...prevMessages,
                    forEmail: ""
                }
            })

            canFormPass = true
        }

        console.log(howManyPassed === 23 && canFormPass)

        if (howManyPassed === 23 && canFormPass) {

        }
    }

    const handleChange = ({ target }) => {
        setCVInfo({ 
            ...CVInfo,
            [`${target.id}`]: target.value
         })

         inputCheckValidity(target)
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

    const handleSubmit = (event) => {
        event.preventDefault()

        submitCheckVailidty()
    }

    return (
        <form noValidate>
            <AddInfo 
                category="general" 
                info="General Information" 
                whenClicked={handleClick} 
            />
            <General 
                shouldDisplay={addGeneral} 
                generalChange={handleChange} 
                generalValidation={{
                                    name: messages.forName, 
                                    email: messages.forEmail, 
                                    number: messages.forNumber
                                }}
            />
            <AddInfo 
                category="educational"  
                info="Educational Experience"
                whenClicked={handleClick} 
            />
            <Educational 
                shouldDisplay={addEducational} 
                educationalChange={handleChange} 
                educationalValidation={{
                                    school: messages.forSchool, 
                                    title: messages.forTitle, 
                                    date: messages.forDate
                                }}
            />
            <AddInfo 
                category="practical" 
                info="Practical Experience" 
                whenClicked={handleClick} 
            />
            <Practical 
                shouldDisplay={addPractical} 
                practicalChange={handleChange} 
                practicalValidation={{
                                    company: messages.forCompany, 
                                    position: messages.forPosition, 
                                    mainResponsibility: messages.forMainResponsibility,
                                    startDate: messages.forStartDate,
                                    endDate: messages.forEndDate
                                }}
            />
            <button id="submit" style={{display: addGeneral || addEducational || addPractical ? "block" : "none"}} onClick={handleSubmit}>Generate CV</button>
        </form>
    )
}

export { CVApp }