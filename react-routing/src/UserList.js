import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'

const UserList = (props) => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const res = response.data
                setUsers(res)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <h1>Listing Users - {users.length}</h1>
            <ol>
                {
                    users.map((user) => {
                        return (<li key={user.id}><Link to={`/users/${user.id}`}>{user.username}</Link></li>)
                    })
                }
            </ol>
        </div>
    )
}

export default UserList