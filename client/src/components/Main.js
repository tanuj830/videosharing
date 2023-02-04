import React from 'react'
// import "./css.css"
import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect } from 'react'

const Main = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
  
   axios.get("http://localhost:8000/channel/videos/all").then(res=>setData(res.data)).catch(err=>console.log(err))
   console.log(data)
  },[])
  

  const handleclick = () =>{

  }

  return (

    <div className='container-fluid mt-5' >
      <div className='row' >
        

{
  data.map(i=>(
  
    <div className=' gx-1 col-md-4 col-lg-3'  key={i._id}>
                <Link className='text-decoration-none'  to={`/watch/${i._id}`}>
                <div className=" card " style={{borderRadius:"10px"}} onClick={handleclick}>
    <img src={i.imageURL} className="card-img-top" alt="..."/>
    <div className="card-body"  >
      <h5 className="card-title text-dark lead fs-6">{i.title}</h5>
        <div className='d-flex'>
        <p className='text-muted' style={{fontSize:10}} id='smallText'>Uploaded on {i.Date.slice(0,10)}</p>
        </div>
    </div>
  </div>
              </Link>
            </div>
  ))
}   
     </div>
    </div>
  )
}

export default Main