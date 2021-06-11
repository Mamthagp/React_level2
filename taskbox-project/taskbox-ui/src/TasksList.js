import React from 'react'
import TaskItem from './TaskItem'

const TasksList = (props) => {
    const { tasks, removeItem, editItem } = props

    return (
        <div>
            <h2>TasksList</h2>
            {
                (tasks.length === 0) ? (
                    <div>
                        <h3>No recoreds found</h3>
                        <h4>Add you first task</h4>
                    </div>
                ) : (
                    <div>
                        <h2>My tasks - {tasks.length}</h2>
                        {
                            tasks.map((task) => {
                                return <TaskItem key={task.id} {...task} removeItem={removeItem} editItem={editItem}/>
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TasksList