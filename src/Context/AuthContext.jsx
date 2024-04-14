import React, { createContext, useState } from "react";

export const AuthContextProvider = createContext("");

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [signin, setSignin] = useState(false);
  const authData = {
    userData,
    setUserData,
    signin,
    setSignin,
  };
  return (
    <AuthContextProvider.Provider value={authData}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
