import React from 'react'
import ForumBox from './ForumBox'
import "./css/Feed.css"
import Post from './Post'


function Feed() {
  return (
    <div className='Feed'>
      <ForumBox/>
      <Post/>
    </div>
  )
}

export default Feed
