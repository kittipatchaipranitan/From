import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './page/App.jsx';
import Login from './page/Login/Login.jsx';
import Education from './page/Education/Education.jsx';
import About from './page/About/About.jsx';
import Portfolio from './page/Portfolio/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/App",
    element: <App/>
  },
  {
    path: "/Education",
    element: <Education/>
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Portfolio",
    element: <Portfolio/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
