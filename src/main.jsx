import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         {/* <LogIn /> */}
         <Register />
      </Provider>
   </React.StrictMode>
);
