import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {
  
  const [storeData, setStoreData] = React.useState({})
  const navigate = useNavigate()

  const handleChange=(e)=>{

    const name = e.target.name
    const value = e.target.value

    setStoreData({...storeData,[name]:value})
  }

  const handleSubmit = (e)=>{

    e.preventDefault()

    axios.post("http://localhost:8000/signin/register", storeData).then(res=>console.log(res.data)).catch(err=>console.log(err))
    navigate(-1)
  }
  return (
    <div className='container d-flex justify-content-center align-items-center'>
    <div className='bg-light py-5 w-75 text-center my-5'>
    <div className='d-flex justify-content-center align-items-center my-5'>
      <img src="https://img.icons8.com/material/24/40C057/youtube-play--v1.png" alt="" /><h6 className='mt-1 fs-3 mx-1'>MyTube</h6>
    </div>
    <form action="POST" className='px-md-5 px-2' onSubmit={handleSubmit}>
    <div>
      <input type="text" name='name' onChange={handleChange} className = "w-100 px-3 py-2 text-muted" style={{ border:"none"}} placeholder='Name'/>
      </div>
      <div className='mt-3'>
      <input type="text" name='email' onChange={handleChange} className = "w-100 px-3 py-2 text-muted" style={{ border:"none"}} placeholder='E-mail'/>
      </div>
       <div className='mt-3'>
       <input type="password" name='password' onChange={handleChange} className = "w-100 px-3 py-2 text-muted" style={{border:"none"}} placeholder='Password'/>
       </div>
       <div className='mt-4'>
        <button className='btn btn-primary'>Submit</button>
       </div>
    </form>
    </div>
</div>
  )
}

export default Register