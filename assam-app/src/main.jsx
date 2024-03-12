import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Destination from './components/destinations/Destination.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>

  },
  {
    path: "/destinations",
    element: <Destination/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
