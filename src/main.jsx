import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import { Provider } from "react-redux";
import './Styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import 'antd/dist/antd.css';
=======
import { store } from './redux/store/store';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> becbed1e60dbcdd8674e631d4cc65485551767d5

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
)
