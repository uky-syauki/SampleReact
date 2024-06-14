import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './error-page.jsx'
import './index.css'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Home from './pages/home.jsx'
import Latihan from './pages/latihan.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path:'latihan/',
        element: <Latihan />
      },
      {
        path:'contacts/:id',
        element: <Contact />
      },
      {
        path:'about/',
        element: <About />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
