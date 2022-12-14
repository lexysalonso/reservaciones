import React from 'react'
import Login from './Login'
import {AuthProvider} from 'context/UserContext'

const ProviderLogin = () => {
  return (
    <AuthProvider>
        <Login/>
    </AuthProvider>
  )
}

export default ProviderLogin;






