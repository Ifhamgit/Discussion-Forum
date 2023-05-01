import { Avatar } from '@mui/material'
import React from 'react'
import "./css/ForumBox.css"


function ForumBox() {
  return (
    <div className='ForumBox'>
         <div className='ForumBox-avatar'>
            <Avatar/>
        </div>
         <div className='ForumBox-question'>
           <h5>What is your Question?</h5>
           
        </div>
    </div>
  )
}

export default ForumBox
