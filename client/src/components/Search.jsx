import React from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import "./mobiledevices.css"
import { useLocation } from 'react-router-dom'
const Search = () => {

const {state} = useLocation()
console.log(state.searchData)
  return (
    <>
    <div className='container d-flex mt-3 align-items-center'>
        <div className='mx-1'>
            <Link className='text-dark' to="/"><IoMdArrowRoundBack style={{fontSize:30}}/></Link>
        </div>
        <div className='w-100 mx-1'>
            <input className='py-2 px-3 w-100 lead fs-6' style={{border:"none",backgroundColor:"#F1F1F1", borderRadius:20}} type="text" placeholder='Search EduLearn' name="" id="" />
        </div>
      
    </div>
  
  <div className='container'>
    {
      state.searchData.length > 0 ? state.searchData.map(data=>(
          <Link className='text-decoration-none' to={"/watch/" + data._id}>
          <div className='row my-1 bg-light p-2'>
            <div className='col-4 d-flex align-items-center'>
              <img className="img-fluid" src={data.imageURL} alt="" />
            </div>
            <div className='col'>
              <h1 className='lead'>{data.title}</h1>
                <small className='text-muted'>{data.views} views | {data.Date ? data.Date.slice(0,10): data.Date}</small>
                <p className='mt-2 lead fs-6 text-muted'>{data.disp}</p>
            </div>
    </div>
          </Link>
        )):null
      }
  </div>
    </>
  )
}

export default Search