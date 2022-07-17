import React from 'react'
import Logeado from '../containers/Logeado'
import { Routes, Route } from "react-router-dom";
import AddProducto from '../containers/AddProducto';

const DashboardRoutes = () => {
   return (
      <>
         <Routes>
            {/* <Route path='/logeado' element={<Logeado />} /> */}
            <Route path='/add' element={<AddProducto />} />
         </Routes>
      </>
   )
}

export default DashboardRoutes