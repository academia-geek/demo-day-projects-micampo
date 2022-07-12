import React from 'react'
import Logeado from '../containers/Logeado'
import { Routes, Route } from "react-router-dom";

const DashboardRoutes = () => {
   return (
      <>
         <Routes>
            <Route path='/logeado' element={<Logeado />} />
         </Routes>
      </>
   )
}

export default DashboardRoutes