import React, { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import axios from "axios"
import { AssignmentTurnedInRounded, Close, ExpandMoreRounded, FeaturedPlayListRounded,NotificationsRounded,PeopleAltRounded, Search } from '@mui/icons-material';
import { Avatar, Button, Input} from '@mui/material';
import "./css/Navbar.css"
import logo from "../Images/Graphic-Blog-Marketing-Clio-Ap-unscreen.gif";
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css"
import {signOut} from "firebase/auth"
import {auth} from "../Firebase"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Feature/userSlice';
// import reFetching from "./Feed"




function Navbar() {


  const[open, setOpen] = useState(false)
  const[inputURL, setinputURL] = useState("")
  const [question, setQuestion] = useState("")
  
  const close = (<Close/>)

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

 const handleSubmit = async()=>{

     if(question !== "" ){

      const config = {
        headers:{
          "Content-Type": "application/json"
        }
      }

      const body = {
        questionName: question,
        questionUrl:inputURL,
        user:user
      }

      await axios.post("http://localhost:8000/api/question", body, config).then((res)=>{

        console.log(res.data)
        setOpen(false)
        // reFetching()

      }).catch((e)=>{

        console.log(e)
        // e.preventDefault()
        //  window.location.href = "/"

      })
     }
  }

  const handleLogout=()=>{
    if(window.confirm("Are you sure to logout?"))
    signOut(auth).then(()=>{
      dispatch(logout())
    })
  }

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
                    <input 
                    type="text" 
                    placeholder='Search questions'
                    />
                </div>
                <div className="Fnav-remainder">
                  <span onClick = {handleLogout}><Avatar src = {user?.photo}/></span>
                    
                </div>
                <Button style={{marginLeft:"15px"}}  onClick={() => setOpen(true)} variant="outlined">Add Question</Button>
                <Modal 
                open = {open} 
                closeIcon = {close} 
                onClose={()=> setOpen(false)} 
                closeOnEsc = {true}
                center
                closeOnOverlayClick = {false}
                styles={{
                  overlay:{
                    height: "auto"
                  }
                }}
                >
                  <div className="modal-title">
                    <h5>Add Question</h5>
                    <h5>Share Link</h5>
                  </div>
                  <div className="modal-avatar">
                    <Avatar src = {user?.photo} className='avatar'/>
                    <div className="modal-scope">
                      <PeopleAltRounded/>
                      <p>Public</p>
                      <ExpandMoreRounded/>
                      </div> 
                  </div>
                  <div className="modal-field">
                    <Input 
                    value ={question}
                    onChange={(e)=>setQuestion(e.target.value)} 
                    type = "text" 
                    placeholder='Start your question here?' 
                    />
                    <div className='modal-field-Link' style={{
                        display:"flex",
                        flexDirection:"column"
                    }}>
                      <input type="text" 
                      placeholder='Optional: Include a link for the context'
                      value={inputURL}
                      onChange={(e)=> setinputURL(e.target.value)}
                      />

                      {inputURL !== "" &&
                      <img 

                          style={{
                            height:"40vh",
                            marginTop:"20px",
                            objectFit:"contain"
                          }}

                      src={inputURL} alt="Link does not have any pic to display or cannot be dispalyed"/>
                     }

                    </div>
                  </div>
                  <div className="modal-buttons">
                    <button className = 'cancel' onClick = {()=> setOpen(false)}> Cancel </button>
                    <button onClick={handleSubmit} type='submit' className = 'add'> Add Question </button>
                  </div>
                </Modal>
        </div>
      
    </div>
  )
}

export default Navbar

