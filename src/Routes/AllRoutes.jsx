import { Route, Routes } from "react-router-dom";

import Home from '../Routes/Home'
import Dashboard from '../Routes/Dashboard'
import Login from '../Routes/Login'
import Signin from '../Routes/Signin'
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>

      </Routes>
    </>
  );
};

export default AllRoutes;
