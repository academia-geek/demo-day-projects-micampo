import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import './Styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
