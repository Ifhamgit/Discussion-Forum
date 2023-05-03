import React, { useEffect, useState } from 'react'
import ForumBox from './ForumBox'
import "./css/Feed.css"
import Post from './Post'
import axios from 'axios'



function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{

    axios.get("http://localhost:8000/api/question").then((res)=>{
      console.log(res.data)
     
      setPosts(res.data.reverse())
    }).catch((e)=>{
      console.log(e)
    })
  },[])

  // const reFetching =()=>{
  //   axios.get("http://localhost:8000/api/question").then((res)=>{
  //     console.log(res.data)
  //     console.log("yo")
  //     setPosts(res.data.reverse())
  //   }).catch((e)=>{
  //     console.log(e)
  //   })
  // }

  return (
    <div className='Feed'>
      <ForumBox/>
      {
        posts.map((post,index)=>(<Post key={index} post= {post}/>))
      }
      {/* <Post/> */}
    </div>
  )
}

export default Feed
