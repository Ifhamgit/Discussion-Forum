import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { AssignmentTurnedInRounded, FeaturedPlayListRounded,NotificationsRounded,PeopleAltRounded, Search } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import "./css/Navbar.css"
 import logo from "../Images/Graphic-Blog-Marketing-Clio-Ap-unscreen.gif";




function Navbar() {
  return (
    <div className='Fnav'>
        <div className="Fnav-content">
            <div className="Fnav-logo">
                <img src={logo}
                alt="logo" 
                />
                </div>
                <div className="Fnav-icons">
                        <div className="Fnav-icon"><HomeRoundedIcon/></div>
                        <div className="Fnav-icon"><FeaturedPlayListRounded/></div>
                        <div className="Fnav-icon"><AssignmentTurnedInRounded/> </div>
                        <div className="Fnav-icon"><PeopleAltRounded/></div>
                        <div className="Fnav-icon"><NotificationsRounded/></div>
                </div>
                <div className="Fnav-input">
                    <Search/>
                    <input type="text" placeholder='Search questions' />
                </div>
                <div className="Fnav-remainder">
                    <Avatar/>
                </div>
                <Button variant="outlined">Add Question</Button>
        </div>
      
    </div>
  )
}

export default Navbar
