import { Avatar } from '@mui/material'
import React from 'react'
import "./css/ForumBox.css"
import {useSelector } from 'react-redux';
import { selectUser } from '../Feature/userSlice';


function ForumBox() {
  const user = useSelector(selectUser)
  return (
    <div className='ForumBox'>
         <div className='ForumBox-avatar'>
            <Avatar src = {user?.photo}/>
        </div>
         <div className='ForumBox-question'>
           <h5>What is your Question?</h5>
           
        </div>
    </div>
  )
}

export default ForumBox
