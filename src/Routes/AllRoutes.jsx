import { Route, Routes } from "react-router-dom";

import Home from '../Routes/Home'
import Dashboard from '../Routes/Dashboard'
import CreateAccount from './CreateAccount'
import Signin from '../Routes/Signin'
import ProductsTable from "../Components/ProductsTable";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/CreateAccount" element={<CreateAccount/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path='/products' element={<ProductsTable/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
