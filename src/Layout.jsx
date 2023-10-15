import React from 'react'
import { Outlet } from 'react-router-dom'
import Quoraheader from './Components/Header/Quoraheader'
import "./App.css"
function Layout() {
  return (
    <div>
         <div className = 'quora'>
      <Quoraheader/>
      <div className="quora_contents">
        <div className='quora_content'>
        <Outlet/>
     
        </div>
      </div>
    </div>
    </div>
  )
}

export default Layout