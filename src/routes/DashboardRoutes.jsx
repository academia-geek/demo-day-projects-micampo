import React from 'react';
import Logeado from '../containers/Logeado';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddProducto from '../containers/AddProducto';
import Home from '../containers/Home';
import User from '../containers/User';
import QuienesSomos from '../containers/QuienesSomos';
import Validations from '../containers/validations/Validations';

const DashboardRoutes = () => {
   return (
      <>
         <Routes>
            {/* <Route path='/logeado' element={<Logeado />} /> */}
            <Route path='/add' element={<AddProducto />} />
            <Route path='/home' element={<Home />} />
            <Route path='/user-dashboard' element={<User />} />
            <Route path='/sobre-nosotros' element={<QuienesSomos />} />
            <Route path='validaciones' element={<Validations />} />
            <Route path='*' element={<Navigate to='/home' />} />
         </Routes>
      </>
   );
};

export default DashboardRoutes;
