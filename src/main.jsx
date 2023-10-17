import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Updatecofee from './Companents/updatecofee.jsx';
import AddCofee from './Companents/addCofee.jsx';
import Register from './Companents/Register.jsx';
import Login from './Companents/Login.jsx';
import Authprovider from './Authprovider/Authcontext.jsx';
import Roots from './Companents/Roots/Roots.jsx';
import Users from './Companents/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddCofee></AddCofee>
      },
      {
        path: "/updatecoffee/:id",
        element: <Updatecofee></Updatecofee>,
        loader: ({ params }) => fetch(`https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/user')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)