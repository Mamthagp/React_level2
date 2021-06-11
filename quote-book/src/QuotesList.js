import React from 'react'
import QuoteItem from './QuoteItem'
import QuotesForm from './QuotesForm'

const QuotesList = (props) => {
    const { quotes } = props
    console.log(quotes.length)
    return (
        <div className='col-md-8 mx-auto'>
            <h3 className='text-info mb-4'>List of Quotes</h3>
            {
                
                (quotes.length === 0) ? (
                    <div>
                        <h4 className='text-secondary'>No records found</h4>
                        <p className='text-secondary'>Add your first quote</p>
                    </div>
                )
            : (
                <div>
                    <h4 className='text-secondary mb-4'>My Quotes - {quotes.length}</h4>
                        {
                            quotes.map((quote) => {
                                return (<QuoteItem key={quote.id} {...quote}/>)
                            })
                        }
                </div>
            )
            }
            
        </div>
    )
}

export default QuotesList
