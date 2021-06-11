import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TasksList from './TasksList'
import AddTask from './AddTask'

const TaskContainer = (props) => {
    const [ tasks, setTasks ] = useState([])

    const editItem = (task) => {
        const res = tasks.map((t) => {
            if(t.id === task.id) {
                return {...t, ...task}
            }else{
                return {...t}
            }
        })
        setTasks(res)
    }

    const addItem = (task) => {
        setTasks([...tasks, task])
    }

    const removeItem = (id) => {
        const result = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(result)
    }

    useEffect(() => {
        axios.get('http://localhost:3033/api/tasks')
        .then((response) => {
            const result = response.data
            //console.log(result)
            setTasks(result)
        }) // success
        .catch((err) => {
            alert(err.message)
        }) //error
    }, [])
    
    return (
        <div>
            <TasksList tasks={tasks} removeItem={removeItem} editItem={editItem}/>
            <AddTask addItem ={addItem}/>
        </div>
    )
}

export default TaskContainer