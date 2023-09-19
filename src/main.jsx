import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider} from "react-router-dom";
import Loader from "./Loader.jsx";
import router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />}/>
  </React.StrictMode>,
)
