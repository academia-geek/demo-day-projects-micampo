import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import 'animate.css';
import AppRoutes from './routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <AppRoutes />
      </Provider>
   </React.StrictMode>
);
