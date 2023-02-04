import React from 'react'
import Navbar from '../components/Navbar'
import Main from "../components/Main"
import { UserContext } from "../App";
import { useContext } from "react";
import {  useNavigate } from 'react-router-dom';


const Home = () => {



  return (
    <>
  <Navbar />
    <div className='container' >


      <Main/>
</div>

    
    </>
  )
}

export default Home