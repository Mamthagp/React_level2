import React, { useState, useEffect} from 'react'
import QuotesList from './QuotesList'
import AddQuote from './AddQuote'

const QuotesContainer = (props) => {
    const [ quotes, setQuotes ] = useState([])
    
    const addItem = (quote) => {
        //console.log('container', quotes)
        const res = [quote, ...quotes]
        setQuotes(res)
    }

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    }, [])

    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }, [quotes])

    const removeItem = (id) => {
        const result = quotes.filter((quote) => {
            return quote.id !== id
        })
        setQuotes(result)
    }

    const editItem = (quote) => {
        //console.log('edit', quote)
        const result = quotes.map((q) => {
            if(q.id === quote.id){
                return {...q, ...quote}
            }else{
                return {...q}
            }
        })
        setQuotes(result)
    }

    return (
        <div>
            QuotesContainer
            <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem}/>
            <AddQuote addItem={addItem} />
        </div>
    )
}

export default QuotesContainer