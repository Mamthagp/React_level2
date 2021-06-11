import React from 'react'
import axios from 'axios'

import TaskForm from './TaskForm'

const EditTask = (props) => {
    const { id, title, status, editItem, handleToggle } = props

    
    const formSubmit = (task) => {
        axios.put(`http://localhost:3033/api/tasks/${id}`, task)
            .then((response) => {
                const res = response.data
                editItem(res)
                handleToggle()
            }) //success
            .catch((err) => {
                alert(err.message)
            }) //error
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <TaskForm id={id} title={title} status={status} formSubmit={formSubmit} />
        </div>
    )
}

export default EditTask