import React from 'react'
import { Outlet } from 'react-router-dom'
import Quoraheader from './Components/Header/Quoraheader'
import Sidebar from './Components/Contents/Sidebar'
import "./App.css"
function Layout() {
  return (
    <div>
         <div className = 'quora'>
      <Quoraheader/>
      <div className="quora_contents">
        <div className='quora_content'>
        <Sidebar/>
        <Outlet/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Layout