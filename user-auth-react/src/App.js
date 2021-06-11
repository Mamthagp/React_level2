import React, { useState, useEffect } from 'react'
import NavLink from './components/NavLink'

const App = (props) => {
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)

  const handleAuth = () => {
      setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  }, [])

  return (
    <div>
      <h1>User Auth</h1>
      <NavLink userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
    </div>
  )
}

export default App