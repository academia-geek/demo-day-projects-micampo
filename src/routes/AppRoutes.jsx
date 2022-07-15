import React, { useEffect, useState } from 'react'
import Home from "../containers/Home";
import Login from "../containers/Login";
import QuienesSomos from "../containers/QuienesSomos";
import Registro from "../containers/Registro";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import DashboardRoutes from './DashboardRoutes';
import Nav1 from '../components/Navbar';
import Aliados from '../containers/Aliados';
import Agroinsumos from '../containers/Agroinsumos';
import Us from '../containers/Us';
import Mercado from '../containers/Mercado';

const AppRoutes = () => {
   const [checkAuth, setCheckAut] = useState(true)
   const [isLogget, setIsLogget] = useState(true)

   // useEffect(() => {
   //    const auth = getAuth();
   //    onAuthStateChanged(auth, (user) => {
   //       if (user?.uid) {
   //          //console.log(user);
   //          setIsLogget(true)
   //       } else {
   //          setIsLogget(false)
   //       }
   //       setCheckAut(false)
   //    })
   // }, [setIsLogget, setCheckAut])


   // if (checkAut) {
   //    return (
   //       <h1 style={{ "color": "white" }}>Espere...</h1>
   //    )
   // }

   return (
      <BrowserRouter>
      <Nav1/>
         <Routes>
            

            <Route path='/home' element={
               <PublicRoutes isAuth={isLogget} >
                  <Home />
               </PublicRoutes>
            } />
            <Route path='/mercado' element={
               <PublicRoutes isAuth={isLogget} >
                  <Mercado/>
               </PublicRoutes>
            } />
            <Route path='/aliados' element={
               <PublicRoutes isAuth={isLogget} >
                  <Aliados />
               </PublicRoutes>
            } />
            <Route path='/agroinsumos' element={
               <PublicRoutes isAuth={isLogget} >
                  <Agroinsumos/>
               </PublicRoutes>
            } />
            <Route path='/nosotros' element={
               <PublicRoutes isAuth={isLogget} >
                  <Us/>
               </PublicRoutes>
            } />
            <Route path='/login' element={
               <PublicRoutes isAuth={isLogget}>
                  <Login />
               </PublicRoutes>
            } />

            <Route path='/login' element={
               <PublicRoutes isAuth={isLogget}>
                  <Registro />
               </PublicRoutes>
            } />

            <Route path='/login' element={
               <PublicRoutes isAuth={isLogget}>
                  <QuienesSomos />
               </PublicRoutes>
            } />

            <Route path='/*' element={
               <PrivateRoutes isAuth={isLogget}>
                  <DashboardRoutes />
               </PrivateRoutes>
            } />

         </Routes>
      </BrowserRouter>
   )
}

export default AppRoutes