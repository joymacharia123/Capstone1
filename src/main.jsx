import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'

const urls = [
  {
    path:'/',
    element:<App/>

  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path: '/events',
    element:<Events/>
  },
]

const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
