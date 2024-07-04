import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'

const router = createBrowserRouter([
    {
    path: '/dashboard',
    element: <App/>
    },
    {
        path: '/monitor',
        element: <App/>
    },
    {
        path: '/activity',
        element: <App/>
    },
    {
        path: '/revenue',
        element: <App/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
