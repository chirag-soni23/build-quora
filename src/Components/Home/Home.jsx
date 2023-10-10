import React from 'react'
import Feed from '../Contents/Feed'
import Widget from '../Contents/Widget'
function Home() {
  return (
    <div className = 'quora'>
      <div className='quora_content'>
   <Feed/>
   <Widget/>
      </div>
    </div>
  )
}

export default Home