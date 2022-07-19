import React from 'react'
import Logeado from '../containers/Logeado'
import { Routes, Route } from "react-router-dom";
import AddProducto from '../containers/AddProducto';
import Home from '../containers/Home';
import User from '../containers/User';
import QuienesSomos from '../containers/QuienesSomos';

const DashboardRoutes = () => {
   return (
      <>
         <Routes>
            {/* <Route path='/logeado' element={<Logeado />} /> */}
            <Route path='/add' element={<AddProducto />} />
            <Route path='/home' element={<Home />} />
            <Route path='/user-dashboard' element={<User />} />
            <Route path='/sobre-nosotros' element={<QuienesSomos />} />
            
         </Routes>
      </>
   )
}

export default DashboardRoutes