import React, { useState } from 'react'
import "./css/Post.css"
import { Avatar } from '@mui/material'
import { ArrowDownwardRounded, ArrowUpwardRounded, ChatBubbleRounded, Close, MoreHorizRounded, RepeatOneRounded, ShareRounded } from '@mui/icons-material'
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css"
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"



function Post() {

    const[open, setOpen] = useState(false)

    const close = (<Close/>)

  return (
    <div className='post'>
        <div className="post-avatar">
            <Avatar/>
            <h4>User Name</h4>
            <small>Timestamp</small>
        </div>
        <div className="post-body">
            <div className="post-question">
            <p>This is test question</p>
            <button onClick={()=> setOpen(true)} className= "post-btn-ans">Answer This </button>
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
             }}>
                <div className="modal-question">
                    <h1>This is the test question</h1>
                    <p> asked by ("") <span className='name'>Username</span> on <span className='name'>{" "}  {" "} timestamp</span> </p>
                    
                </div>
                <div className="modal-answer">
                    <ReactQuill placeholder='Enter the answer'/>
                </div>
                <div className="modal-buttons">
                    <button className = 'cancel' onClick = {()=> setOpen(false)}> Cancel </button>
                    <button type='submit' className = 'add'> Add Question </button>
                </div>
            </Modal>
        </div>
        </div>
        <div className="post-footer">
            <div className="post-footerAction">
                <ArrowUpwardRounded/>
                <ArrowDownwardRounded/>
            </div>
            <RepeatOneRounded/>
            <ChatBubbleRounded/>
                <div className="post-footer-right">
                    <ShareRounded/>
                    <MoreHorizRounded/>
                </div>
        </div>
        <p style={{

            color: "rgba(0,0,0,0.5)",
            fontSize:"12px",
            fontWeight:"bold",
            margin: " 10px 0"

        }}
        >1 Answer</p>
        <div  className="post-answers" style={{

            margin: "5px 0px 0px 0px",
            padding:"5px 0px 0px 20px",
            borderTop:"1px solid lightgray",

        }}>
       
            <div className="post-answer-container" style={{

                display:"flex",
                flexDirection:"column",
                width:"100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray"

            }}>

                <div className="post-answered" style={{
                    
                        display:"flex",
                        alignItems:"center",
                        marginBottom: "10px",
                        fontSize:"12px",
                        fontweight:600,
                        color:"#888",
                
                }}>
                    <Avatar/>
                        <div className="post-avatar" style={{

                            margin: "0px 10px"
                            
                        }}>
                            <p>Username</p>
                            <span>Tiemstamp</span>
                        </div>
                </div>
                
                <div className="post-answer">
                    This is the test answer
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
