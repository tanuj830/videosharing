import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
const Comment = ({v_Id}) => {
  const [comment, setComment] = React.useState({})
  const [userData, setUserData] = React.useState()
  const [CommentResData, setCommentResData] = React.useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()

    const idd= v_Id
    
const username={
      name: window.localStorage.getItem("name")
    }
    const id ={
      userID: window.localStorage.getItem("user")
    }
    const vidId={
        videoId: idd
    }

    const mergeobj={
     ...username, ...id, ...vidId, ...comment
    }
    console.log(mergeobj)
    await axios.post("http://localhost:8000/comment", mergeobj).then(res=>setCommentResData(res.data)).catch(err=>console.log(err))
    // await axios.post(`http://localhost:8000/comment/${window.localStorage.getItem("user")}`, username).then(res=>console.log(res.data)).catch(err=>console.log(err))
  }
  

  
  

  const handleChange = (e) =>{
    const value = e.target.value
    const name = e.target.name
setComment({...comment, [name]:value})
  }

  return (
    <div className='container-fluid mt-5'>
      <h5 className='fs-3 lead '>Comments</h5>
<form onSubmit={handleSubmit} method="post">
<input type="text" onChange={handleChange} name="desc" className='text-muted lead px-sm-2 px-md-4 fs-6 w-100 py-2' style={{border:"none", backgroundColor:"#f1f1f1", borderRadius:8}} placeholder='Add a comment' />
      <button className='btn btn-success mt-2'>Comment</button>
</form>
    
    </div>
  )
}

export default Comment