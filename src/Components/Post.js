import React from 'react'
import "./css/Post.css"
import { Avatar } from '@mui/material'
import { ArrowDownwardRounded, ArrowUpwardRounded, ChatBubbleRounded, MoreHorizRounded, RepeatOneRounded, ShareRounded } from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
        <div className="post-avatar">
            <Avatar/>
            <h4>User Name</h4>
            <small>Timestamp</small>
        </div>
        <div className="post-body">
            <div className="post-question">
            <p>
                This is test question
            </p>
            <button className= "post-btn-ans">Answer This </button>
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
        <div  className="post-answers">
        style={{

            margin: "5px 0px 0px 0px",
            padding:"5px 0px 0px 20px",
            borderTop:"1px solid lightgray",

        }}
       
            <div className="post-answer-container"> 
            style={{

                display:"flex",
                flexDirection:"column",
                width:"100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray"

            }} 

                <div className="post-answered"> 
                style={{
                    
                        display:"flex",
                        alignItems:"center",
                        marginBottom: "10px",
                        fontSize:"12px",
                        fontweight:600,
                        color:"#888",
                
                }} 
                    <Avatar/>
                        <div className="post-avatar"> 
                        style={{

                            margin: "0px 10px"
                            
                        }} 
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
