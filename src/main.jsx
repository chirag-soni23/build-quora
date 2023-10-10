import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Notification from './Components/Notification/Notification'
import Home from './Components/Home/Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element ={<Layout/>}>
      <Route path ="" element={<Home/>} />
      <Route path = "notification" element ={<Notification/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
