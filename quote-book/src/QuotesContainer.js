import React, { useState } from 'react'
import QuotesForm from './QuotesForm'
import QuotesList from './QuotesList'

const QuotesContainer = (props) => {
    const [ quotes, setQuotes ] = useState([])

    const addItem = (quote) => {
        const res = [quote, ...quotes]
        setQuotes(res)
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='h2 display-5 mt-2 text-secondary col-md-5 text-center mx-3'>Quotes Container</h2>
            </div>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <QuotesList quotes={quotes} />
                </div>
                <div className='col-md-6'>
                    <QuotesForm addItem ={addItem}/>
                </div>
            </div>
        </div>
    )
}

export default QuotesContainer