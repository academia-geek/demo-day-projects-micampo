import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddProducto from '../containers/AddProducto';
import Home from '../containers/Home';
import User from '../containers/User';
import QuienesSomos from '../containers/QuienesSomos';
import Validations from '../containers/validations/Validations';
import Aliados from '../containers/Aliados';
import Agroinsumos from '../containers/Agroinsumos';
import Mercado from '../containers/Mercado';
import Productos from '../containers/Productos';
import GlobalChat from '../components/chat/GlobalChat';
import Detalle from '../containers/Detalle';
import InfoDelAliado from '../containers/InfoDelAliado';
import MapView from '../components/MapView';

const DashboardRoutes = () => {
   return (
      <>
         <GlobalChat />
         <Routes>
            {/* <Route path='/logeado' element={<Logeado />} /> */}
            <Route path='/add' element={<AddProducto />} />
            <Route path='/home' element={<Home />} />
            <Route path='/perfil-usuario' element={<User />} />
            <Route path='/aliados' element={<Aliados />} />
            <Route path='/agroinsumos' element={<Agroinsumos />} />
            <Route path='/mercado' element={<Mercado />} />
            <Route path='/sobre-nosotros' element={<QuienesSomos />} />
            <Route path='/detalle/:nombre' element={<Detalle />} />
            <Route path='map' element={<MapView />} />
            <Route path='/validaciones' element={<Validations />} />
            <Route path='/aliado/:name/:uid' element={<InfoDelAliado />} />
            <Route path='/productos' element={<Productos />} />

            <Route path='*' element={<Navigate to='/home' />} />
         </Routes>
      </>
   );
};

export default DashboardRoutes;
