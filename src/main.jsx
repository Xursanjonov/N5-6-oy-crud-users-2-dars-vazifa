import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// redux toolkit, react-router-dom 
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './context/store';
// styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

