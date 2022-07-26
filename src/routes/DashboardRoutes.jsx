import React, { useState } from 'react';
import Logeado from '../containers/Logeado';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddProducto from '../containers/AddProducto';
import Home from '../containers/Home';
import User from '../containers/User';
import QuienesSomos from '../containers/QuienesSomos';
import Validations from '../containers/validations/Validations';
import Aliados from '../containers/Aliados';
import Agroinsumos from '../containers/Agroinsumos';
import Mercado from '../containers/Mercado';
<<<<<<< HEAD
=======
import Productos from '../containers/Productos';
import GlobalChat from '../components/chat/GlobalChat';
import ValidateUbication from '../containers/validations/ValidateUbication';
>>>>>>> a12abbf3b509992ff57da705539d7074954d75e9
import MapView from '../components/MapView';
import GlobalChat from '../components/chat/GlobalChat';

const DashboardRoutes = () => {
   return (
      <>
         <GlobalChat />
         <Routes>
            {/* <Route path='/logeado' element={<Logeado />} /> */}
            <Route path='/add' element={<AddProducto />} />
            <Route path='/home' element={<Home />} />
            <Route path='/perfil-usuario' element={<User />} />
            <Route path='/aliados' element={<Aliados/>} />
            <Route path='/agroinsumos' element={<Agroinsumos/>} />
            <Route path='/mercado' element={<Mercado/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/sobre-nosotros' element={<QuienesSomos />} />
            <Route path='validaciones' element={<Validations />} />
            <Route path='map' element={<MapView />} />
            <Route path='*' element={<Navigate to='/home' />} />
         </Routes>
      </>
   );
};

export default DashboardRoutes;
