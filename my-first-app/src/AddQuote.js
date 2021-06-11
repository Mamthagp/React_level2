import React from 'react'
import QuoteForm from './QuoteForm'

const AddQuote = (props) => {
    const { addItem } = props

    const formSubmission = (formData) => {
        addItem(formData)
        //console.log('Form submission', FormData)
    }
    return (
        <div>
            <h2>Add Quote</h2>
            <QuoteForm formSubmission = {formSubmission}/>
        </div>
    )
}

export default AddQuote