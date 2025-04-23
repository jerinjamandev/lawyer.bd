import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Rout/Router'
import Apoinmentprovider from './provider/Apoinmentprovider'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Apoinmentprovider> <RouterProvider router={router} /> <ToastContainer /></Apoinmentprovider>

  </StrictMode>,
)
