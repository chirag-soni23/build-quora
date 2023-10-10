import React from 'react'
import Quoraheader from '../Header/Quoraheader'
import "../css/Quora.css"
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'

function Quora() {
  return (
    <div className = 'quora'>
      <Quoraheader/>
      <div className="quora_contents">
        <div className='quora_content'>
        <Sidebar/>
        <Feed/>
        <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Quora