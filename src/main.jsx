import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.css'
import './Styles/index.css'
import './styles/LogIn.css'
import './styles/Register.css'
import './styles/User.css'
import AppRoutes from './routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <AppRoutes />
      </Provider>
   </React.StrictMode>
);