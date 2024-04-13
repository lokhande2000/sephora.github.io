import React, { createContext, useState } from 'react'

export const AuthContextProvider = createContext("");


const AuthContext = ({ children }) => {

  const [ userData, setUserData ] = useState([])

  const authData = {
    userData,
    setUserData,
  }
  return (
    <AuthContextProvider.Provider value={authData}>
     {children}
    </AuthContextProvider.Provider>
  )
}

export default AuthContext
