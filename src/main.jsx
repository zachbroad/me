import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Loader from "./Loader.jsx";
import router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />}/>
  </React.StrictMode>,
)
