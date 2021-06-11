import React, { useState } from 'react'

const QuotesForm = (props) => {
    const { addItem  } = props
    const [ name, setName ] = useState('')
    const [ body, setBody ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            id:Number(new Date()),
            name:name,
            body:body
        }
        addItem(formData)
        console.log(formData)
        setName('')
        setBody('')
    }

    const handleNameChange = (e) => {
        const res = e.target.value
        setName(res)
    }

    const handleBodyChange = (e) => {
        const res = e.target.value
        setBody(res)
    }

    return (
        <div className='col-md-7 border border-secondary p-4 rounded mx-auto'>
            <h3 className='text-info mb-4'>Add quote</h3>
            <form onSubmit={handleSubmit} className='g-3'>
                <label className='form-label'>Name</label><br/>
                <input type='text' value={name} onChange={handleNameChange} className='form-control' /><br/>
                <label className='form-label'>Body</label><br/>
                <textarea value={body} onChange={handleBodyChange} className='form-control' ></textarea><br/>
                <input type='submit' value='Save' className='btn btn-primary' />
            </form>
        </div>
    )
}

export default QuotesForm