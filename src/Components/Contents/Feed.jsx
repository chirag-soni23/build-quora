import React from 'react'
import Quorabox from './Quorabox'
import "../css/Feed.css"
import Post from './Post'

// Define the Feed component
function Feed() {
  return (
    <div className='feed'>
      {/* Render the Quorabox component */}
      <Quorabox/>
      
      {/* Render the Post component (you can repeat this for multiple posts) */}
      <Post/>
      {/* <Post/>
      <Post/> */}
    </div>
  )
}

export default Feed;
