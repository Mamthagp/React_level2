import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email:email,
            password:password
        }
        // Client side validation we need to do

        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){ //Object.keys(result).includes('errors')
                alert(result.errors)
            }else{
                alert('successfully logged in')
                localStorage.setItem('token', result.token)
                props.history.push('/')
                props.handleAuth()
            }
        })
            .catch((err) => {
                console.log(err.message)
            })
        }

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} name='email' placeholder='Enter email' onChange={handleChange}  /><br/>
                <input type='password' value={password} name='password' placeholder='Enter password' onChange={handleChange}  /><br/>
                <input type='submit' value='Submit' /><br/>
            </form>
        </div>
    )
}

export default Login