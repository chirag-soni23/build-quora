import React from 'react'
import Feed from '../Contents/Feed'
import Widget from '../Contents/Widget'
import Sidebar from '../Contents/Sidebar'
function Home() {
  return (
    <div className = 'quora'>
      <div className='quora_content'>
        <Sidebar/>
   <Feed/>
   <Widget/>

      </div>
    </div>
  )
}

export default Home