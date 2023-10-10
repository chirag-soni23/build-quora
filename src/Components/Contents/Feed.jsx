import React from 'react'
import Quorabox from './Quorabox'
import "../css/Feed.css"
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <Quorabox/>
      <Post/>
      {/* <Post/>
      <Post/> */}
      </div>
  )
}

export default Feed