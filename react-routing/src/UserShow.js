import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserShow = (props) => {
    const { id } = props.match.params
    const [ user, setUser ] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const res = response.data
                setUser(res)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <h2>Show - {id}</h2>
            <p> {user.name} - {user.email} - { user.address && user.address.city } </p>
            <Link to='/users'>Back</Link>
        </div>
    )
}

export default UserShow