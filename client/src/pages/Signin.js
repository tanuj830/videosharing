import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react'

const Signin = () => {

  const [storeData, setStoreData] = React.useState({})
  
  const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value

    setStoreData({...storeData, [name]:value})
  }

  function getAllNaturesFromData(data){
    if(data.email === storeData.email && data.password === storeData.password)
    {
      window.localStorage.setItem("isLogin", "true")
      window.localStorage.setItem("user", data._id)
      window.localStorage.setItem("name", data.name)
      window.location.href = "/"
    }
  }
  const handleSubmit = (e)=>{

    e.preventDefault()

    axios.post("http://localhost:8000/signin", storeData).then((res) =>{
    
      getAllNaturesFromData(res.data)
  }).catch(err=>console.log(err))     
  }

  return (
    <>
<div className='container d-flex justify-content-center align-items-center'>
      <div className='bg-light rounded py-5 w-75 text-center my-5'>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <img src="https://img.icons8.com/material/24/40C057/youtube-play--v1.png" alt="" /><h6 className='mt-1 fs-3 mx-1'>MyTube</h6>
      </div>
    <form action="POST" className="px-2" onSubmit={handleSubmit}>
    <div>
        <input type="email" name='email' onChange={handleChange} className = "w-100 px-3 py-2 text-muted" style={{ border:"none"}} placeholder='E-mail'/>
        </div>
         <div className='mt-3'>
         <input type="password" name='password' onChange={handleChange} className = "w-100 px-3 py-2 text-muted" style={{ border:"none"}} placeholder='Password'/>
         <p className='text-left mt-1 lead' style={{fontSize:16}}>New to this platform?<Link to="/signin/register"> create account</Link></p>
         </div>
         <div className='mt-4'>
          <button className='btn btn-primary'>Submit</button>
         </div>
    </form>
      </div>
  </div>

    </>
  )
}

export default Signin