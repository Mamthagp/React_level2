import React, { useState } from 'react'
import axios from 'axios'

import EditTask from './EditTask'

const TaskItem = (props) => {
    const { id, title, status, removeItem, editItem } = props
    const [ toggle, setToggle ] = useState(false)

    const handleToggle = () => {
        const res = !toggle
        setToggle(res)
    }

    const handleRemove = (id) => {
        //console.log('remove title', id)
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
                .then((response) => {
                    const res = response.data
                    removeItem(res.id)                   
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    }

    return (
        <div>
            {
                toggle ? (
                    <div>
                        <EditTask id={id} title={title} status={status} editItem={editItem} handleToggle={handleToggle}/>
                        <button onClick={handleToggle}>cancel</button>
                    </div>
                ) : (
                    <div>
                        <h3>{title}</h3>
                        <button onClick={handleToggle}>edit</button>
                        <button onClick={() => {
                            handleRemove(id)
                        }}>remove</button>
                    </div>
                )
            }            
        </div>
    )
}

export default TaskItem