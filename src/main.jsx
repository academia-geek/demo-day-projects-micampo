import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ValidatePhone from './components/ValidatePhone';
import './styles/main.css';
import User from './containers/User';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         {/* <LogIn /> */}
         {/* <Register /> */}
         <User />
         {/* <ValidatePhone /> */}
      </Provider>
   </React.StrictMode>
);
