import React, { useState } from 'react'
import "./css/Post.css"
import { Avatar } from '@mui/material'
import { ArrowDownwardRounded, ArrowUpwardRounded, ChatBubbleRounded, Close, MoreHorizRounded, RepeatOneRounded, ShareRounded } from '@mui/icons-material'
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css"
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import htmlReactparser from "html-react-parser"
import { useSelector } from 'react-redux';
import { selectUser } from '../Feature/userSlice';



function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    )
  }


function Post({post}) {

    const[open, setOpen] = useState(false)
    const[answer, setAnswer] = useState("")
    const close = (<Close/>)
    const user = useSelector(selectUser)

    const handleAnswer = (value)=>{
        setAnswer(value)
    }

    const handleAnswerSubmit = async()=>{
        if (post?._id && answer !==""){

            const config = {
                headers:{
                  "Content-Type": "application/json"
                }
              }
        
              const body = {
                answer: answer,
                questionID: post?._id,
                user:user
              }
            await axios.post("http://localhost:8000/api/answer", body, config )
            .then((res)=>{
                console.log(res.data)
                setOpen(false)
            }).catch((e)=>{
                console.log(e)
            })

        }
    }


  return (
    <div className='post'>
        <div className="post-avatar">
            <Avatar src= {post?.user?.photo}/>
            <h4>{post?.user?.userName}</h4>
            <small><LastSeen date = {post?.createdAt}/></small>
        </div>
        <div className="post-body">
            <div className="post-question">
            <p>{post?.questionName}</p>
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
                    <h1>{post?.questionName}</h1>
                    <p> asked by <span className='name'> {post?.user?.userName} </span> on <span className='name'> {new Date(post?.createdAt).toLocaleString()}</span> </p>
                    
                </div>
                <div className="modal-answer">
                    <ReactQuill value= {answer} onChange={handleAnswer} placeholder='Enter the answer'/>
                </div>
                <div className="modal-buttons">
                    <button className = 'cancel' onClick = {()=> setOpen(false)}> Cancel </button>
                    <button onClick={handleAnswerSubmit} type='submit' className = 'add'> Submit </button>
                </div>
            </Modal>
        </div>
        {
            <img src={post.questionUrl} alt="Nothing to Display" />
        }
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
        >{post?.allAnswers.length} Answers yet</p>
        <div  className="post-answers" style={{

            margin: "5px 0px 0px 0px",
            padding:"5px 0px 0px 20px",
            borderTop:"1px solid lightgray",

        }}>
       
            
                {
                    post?.allAnswers?.map((_a)=>(<>
                       
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
                    <Avatar src = {_a.user?.photo}/>
                        <div className="post-avatar" style={{

                            margin: "0px 10px"
                            
                        }}>
                            <p>{_a?.user?.userName}</p>

                            <span style={{

                            margin: "0px 10px"
                            }}> 
                            <LastSeen date={_a?.createdAt}/></span>

                        </div>
                </div>
                
                <div className="post-answer">
                    {htmlReactparser( _a?.answer)}  {/*to remove the tags added by the reactquill in adding of the answer */}
                    
                </div>
                </div>
                </>))}
                    
           
        </div>
    </div>
  )
}

export default Post
