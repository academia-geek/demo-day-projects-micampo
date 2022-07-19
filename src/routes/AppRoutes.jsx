import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Home from '../containers/Home';
import QuienesSomos from '../containers/QuienesSomos';
import DashboardRoutes from './DashboardRoutes';
import Nav1 from '../components/Navbar';
import Aliados from '../containers/Aliados';
import Agroinsumos from '../containers/Agroinsumos';
import Us from '../containers/Us';
import Mercado from '../containers/Mercado';
import LogIn from '../components/auth/Login';
import Register from '../components/auth/Register';
import User from '../containers/User';
import LoadingScreen from '../components/LoadingScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginCheckAction } from '../app/actions/loginCheck.actions';

const AppRoutes = () => {
   const [checkAuth, setCheckAut] = useState(true);
   const [isLogget, setIsLogget] = useState(false);
   const dispatch = useDispatch();
   const loginCheckInfo = useSelector((state) => state.loginCheck);

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            setIsLogget(true);
            dispatch(loginCheckAction(true));
         } else {
            setIsLogget(false);
            dispatch(loginCheckAction(false));
         }
         setCheckAut(false);
      });
   }, [setIsLogget, setCheckAut]);

   useEffect(() => {
      console.log(loginCheckInfo);
   }, [loginCheckInfo]);

   if (checkAuth) {
      return <LoadingScreen />;
   }

   return (
      <BrowserRouter>
         <Nav1 />
         <Routes>
            <Route
               path='/lg/home'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Home />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/mercado'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Mercado />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/aliados'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Aliados />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/agroinsumos'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Agroinsumos />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/nosotros'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Us />
                  </PublicRoutes>
               }
            />

            <Route
               path='/login'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <LogIn />
                  </PublicRoutes>
               }
            />

            <Route
               path='/register'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Register />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/sobre-nosotros'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <QuienesSomos />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/user-dashboard'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <User />
                  </PublicRoutes>
               }
            />

            <Route
               path='/*'
               element={
                  <PrivateRoutes isAuth={isLogget}>
                     <DashboardRoutes />
                  </PrivateRoutes>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRoutes;
