import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header.jsx';
import Main from './Layout/Main.jsx';
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Orders from './component/Orders/Orders.jsx';
import PrivateRoute from './component/Routes/PrivateRoute.jsx';
import Profile from './component/profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile/> </PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>

    </AuthProviders>
  </React.StrictMode>,
)
