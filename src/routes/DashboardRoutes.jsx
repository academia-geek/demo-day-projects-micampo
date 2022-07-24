import React from 'react';
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
import Chat from '../components/chat/Chat';

const DashboardRoutes = () => {
   return (
      <>
         <Routes>
            {/* <Route path='/logeado' element={<Logeado />} /> */}
            <Route path='/add' element={<AddProducto />} />
            <Route path='/home' element={<Home />} />
            <Route path='/perfil-usuario' element={<User />} />
            <Route path='/aliados' element={<Aliados/>} />
            <Route path='/agroinsumos' element={<Agroinsumos/>} />
            <Route path='/mercado' element={<Mercado/>} />
            <Route path='/sobre-nosotros' element={<QuienesSomos />} />
            <Route path='validaciones' element={<Validations />} />
            <Route path='chat' element={<Chat />} />
            <Route path='*' element={<Navigate to='/home' />} />
         </Routes>
      </>
   );
};

export default DashboardRoutes;
