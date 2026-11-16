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
    const [displayCV, setDisplayCV] = React.useState(false)

    const inputCheckVailidity = (target) => {
        const firstLetter = target.id.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = target.id.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters

        if (!target.value.trim()) {
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

        if (target.id === "email") {
            if (!target.value.includes("@")) {
                setMessages(prevMessages => {
                    return {
                        ...prevMessages,
                        forEmail: "Email adresses cannot omit @."
                    }
                })
            } else if (target.value.trim()[0] === "@") {
                setMessages(prevMessages => {
                    return {
                        ...prevMessages,
                        forEmail: "Not valid email format."
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
        let currentState;

        for (let i = 0; i < CVValues.length; i++) {
            if (!CVValues[i].trim()) {
                setMessages(prevMessages => {
                    currentState = prevMessages

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
        } else if (CVInfo.email.trim()[0] === "@") {
            setMessages(prevMessages => {
                return {
                    ...prevMessages,
                    forEmail: "Not valid email format."
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

        return howManyPassed === 23 && canFormPass
    }

    const handleChange = ({ target }) => {
        setCVInfo({ 
            ...CVInfo,
            [`${target.id}`]: target.value
         })

         inputCheckVailidity(target)
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
        if (submitCheckVailidty()) {
            setDisplayCV(true)
        } else {
            event.preventDefault()
        }
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