import React, { useState} from 'react'
import './App.css'
import EditQuote from './EditQuote'

const QuotesItem = (props) => {
    const { id, name, body, removeItem, editItem } = props
    const [toggle, setToggle ] = useState(false)

    const handleRemove = () => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            removeItem(id)
        }
    }

    const handleToggle = () => {
        const res = !toggle
        setToggle(res) // setToggle(!toggle)
    }

    

    return (
        <div class='quoteBody'>
        {
            toggle ? (
                <div>
                    <EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle} />
                    <button onClick={handleToggle}>cancel</button>
                </div>
            ) 
            : 
            (
                <div>
                    <b>{body}</b><br/>
                    <b class='quoteName'>- {name}</b>
                    <button onClick={handleToggle}>Edit</button>
                    <button onClick={handleRemove}>remove</button>
                </div>
            )
        }
           
        </div>
    )
}

export default QuotesItem