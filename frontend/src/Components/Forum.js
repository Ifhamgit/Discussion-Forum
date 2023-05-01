import React from 'react'
import Navbar from './Navbar'
import "./css/Forum.css"
import SideNav from './SideNav'
import Feed from './Feed'
import Widget from './Widget'

function Forum() {
  return (
    <div className='Forum'>
          <Navbar/>
          <div className="Forum-contents">
            <div className="Forum-content">
              <SideNav/>
              <Feed/>
              <Widget/>
            </div>
          </div>
    </div>
  )
}

export default Forum
