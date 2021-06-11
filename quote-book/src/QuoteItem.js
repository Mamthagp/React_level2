import React from 'react'

const QuoteItem = (props) => {
    const { name, body } = props
    return (
        <div className='border border-secondary rounded p-3 mb-4'>
            <p>{body}</p>
            <b className='text-success'>- {name}</b>
        </div>
    )
}

export default QuoteItem