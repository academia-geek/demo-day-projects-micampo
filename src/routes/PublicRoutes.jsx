import React from 'react'
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ isAuth, children }) => {
   return !isAuth ? children : <Navigate to='/logeado' />
}

export default PublicRoutes