import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Home from '../containers/Home';
import QuienesSomos from '../containers/QuienesSomos';
import DashboardRoutes from './DashboardRoutes';
import Nav1 from '../components/Navbar';
import Aliados from '../containers/Aliados';
import Agroinsumos from '../containers/Agroinsumos';
import Mercado from '../containers/Mercado';
import LogIn from '../components/auth/Login';
import Register from '../components/auth/Register';
import LoadingScreen from '../components/LoadingScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginCheckAction } from '../app/actions/loginCheck.actions';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Footer from '../components/Footer';
import Productos from '../containers/Productos';
import { getUserAppDataAction } from '../app/actions/userAppData.actions';
import { getUserAction } from '../app/actions/user.actions';
import User from '../containers/User';

const AppRoutes = () => {
   const [checkAuth, setCheckAut] = useState(true);
   const [isLogget, setIsLogget] = useState(false);
   const dispatch = useDispatch();
   const userDataInitialState = {
      type: '',
      gender: '',
      age: '',
      ubication: '',
      uid: '',
      name: '',
      photoURL: ''
   };

   const searchDocOrCreateDoc = async (userUID) => {
      const docRef = doc(db, 'usuarios', userUID);
      const consult = await getDoc(docRef);

      if (consult.exists()) {
         const infoDoc = consult.data();
         dispatch(getUserAppDataAction(infoDoc.data));
         if (
            infoDoc.data.age === '' ||
            infoDoc.data.gender === '' ||
            infoDoc.data.type === ''

         ) {
            if (window.location.pathname !== '/validaciones') {
               window.location.href = '/validaciones';
            }
         }
         return infoDoc;
      } else {
         await setDoc(docRef, { data: { ...userDataInitialState } });
         const consult = await getDoc(docRef);
         const infoDoc = consult.data();
         dispatch(getUserAppDataAction(infoDoc));
         return infoDoc;
      }
   };

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            setIsLogget(true);
            dispatch(getUserAction());
            dispatch(loginCheckAction(true));
            searchDocOrCreateDoc(user.uid);
         } else {
            setIsLogget(false);
            dispatch(loginCheckAction(false));
         }
         setCheckAut(false);
      });
   }, [setIsLogget, setCheckAut]);

   if (checkAuth) {
      return <LoadingScreen />;
   }

   return (
      <BrowserRouter>
         <Nav1 />
         <Routes>
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
               path='/lg/sobre-nosotros'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <QuienesSomos />
                  </PublicRoutes>
               }
            />

            <Route
               path='/lg/perfil-usuario'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <User />
                  </PublicRoutes>
               }
            />
            <Route
               path='/lg/productos'
               element={
                  <PublicRoutes isAuth={isLogget}>
                     <Productos />
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
         <Footer/>
      </BrowserRouter>
   );
};

export default AppRoutes;
