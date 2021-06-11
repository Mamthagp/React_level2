import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuoteForm = (props) => {
    const { formSubmission, id:slNo, name:author, body:quote, handleToggle } = props 
    const [ id, setId ] = useState(slNo ? slNo : uuidv4())
    const [ name, setName ] = useState(author ? author : '')
    const [ body, setBody ] = useState(author ? quote : '')


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            //id:Number(new Date()),
            //id:uuidv4(),
            id:id,
            name:name,
            body:body
        }

        //console.log('Form data', formData)
        formSubmission(formData)
        //addItem(formData)

        //reset form
        if(handleToggle){
            handleToggle()
        }
        setName('')
        setBody('')
    }

    const handleNameChange = (e) => {
        const inputValue = e.target.value
        setName(inputValue)
    }

    const handleBodyChange =(e) => {
        setBody(e.target.value)
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type='text' value={name} onChange={handleNameChange}/><br />
                <label>Body</label> <br />
                <textarea value={body} onChange={handleBodyChange}></textarea><br/>
                <input type='submit' value='save'/>
            </form>
        </div>
    )
}

export default QuoteForm