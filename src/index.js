import React from 'react';
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify'; //toast required imports
import 'react-toastify/dist/ReactToastify.css';//toast required imports
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
//added toast-container for styled notification alerts
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>

);

