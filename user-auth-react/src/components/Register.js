import React, { useState } from 'react'
import axios from 'axios'

const Register = (props) => {
    const [ username , setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: username,
            email:email,
            password:password
        }

        // If Validations pass
        
        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    alert('successfully created an account')
                    props.history.push('/login')
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const handleChange = (e) => {
        if(e.target.name === 'username' ){
            setUsername(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }   
    }

    return (
        <div>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' onChange={handleChange} value={username} placeholder='Enter username'/><br/><br/>
                <input type='email' name='email' onChange={handleChange} value={email} placeholder='Enter email' /><br/><br/>
                <input type='password' name='password' onChange={handleChange} value={password} placeholder='Enter password' /> <br/><br/>
                <input type='submit' value='submit' />
            </form>
        </div>)
}

export default Register