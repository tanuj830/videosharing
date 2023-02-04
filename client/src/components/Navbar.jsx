import React from "react";
import axois from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./mobiledevices.css";
import { useEffect } from "react";
import { BsSearch , BsPlayBtnFill} from "react-icons/bs";
import './css.css'
import { UserContext } from "../App";
import { useContext } from "react";


const Navbar = () => {
  const [query, setQuery] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);

  const navigate = useNavigate()
  
  const {isLogin, setIsLogin} = useContext(UserContext)

  const handleSubmit = async(e) => {
    e.preventDefault()
    await axois
      .get(`http://localhost:8000/watch?search=${query}`)
      .then((res) => {
        setSearchData(res.data)
        if(searchData.length > 0)  
        navigate("/search",{state:{searchData}}) 
        else 
        alert("OOPS, there is nothing to show \nTry searching something different")
      })
      .catch((err) => console.log(err));

          

  };

  useEffect(() => {
    setIsLogin(window.localStorage.getItem("isLogin")) 
    console.log(isLogin)
  },[])
  

  const handleSignOut = () => {
    setIsLogin("false")
    window.localStorage.setItem("isLogin", "false")
    window.localStorage.setItem("user", "")
    navigate("/signin")
  };

  const handleSignIn = () => {
  
  };

  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
  <div className="d-flex align-items-center">
          <i className="w-100 mx-1"><BsPlayBtnFill /></i>
          <Link to="/"className="lead fs-5 text-decoration-none text-dark">EduLearn</Link>
        </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  

    <form className=" mt-1 w-100 mx-auto search"  onSubmit={handleSubmit}>
    <input className=" px-4 py-2" type="text" placeholder="Search" name="search" onChange={e=>setQuery(e.target.value)} />       
    <button type="submit"  className="btn"><BsSearch /></button>
      </form>
      
      


 <div className="d-flex my-2 mx-2 align-items-center">   
<div>
      <Link className="" to="/channel/create">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                className="bi bi-camera-video-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                />
              </svg>
            </Link>
          </div>
          <div>
            <Link className="mx-3" to="/notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                // fill="whitesmoke"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </Link>
          </div>
          <div className="dropdown">
  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <Link 
                className=""
                to="/user"
                role="button"
              >
                <img
                  className="img-fuid"
                  style={{ width: "25px", borderRadius: 20 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypACuX8ygmzipbD197uPBv40pqsvU8Egh-_Oo_xqg2OQqZbL1Cm-5XRxVcF3QjaocHCg&usqp=CAU"
                />
              </Link>  </a>

  <ul className="dropdown-menu  " aria-labelledby="dropdownMenuLink">
    
    <li> <Link className="dropdown-item  lead text-left fs-6" onClick={handleSignOut} to="/signin">Your Channel</Link></li>

    <li> {isLogin === 'true' ?  <Link className="dropdown-item  lead text-left fs-6" onClick={handleSignOut} to="/signin">Sign-out</Link>: 
     <Link  className="dropdown-item  lead text-left fs-6" to="/signin" onClick={handleSignIn}>Signin</Link>} </li>

 
  </ul>
</div>
 </div>
         
    </div>
  </div>
</nav>






{/* 
      <div className=" for-mobile py-3  container-fluid">
        <div className="d-flex align-items-center">
          <i className="w-100 mx-1"><BsPlayBtnFill /></i>
          <Link to="/"className="lead fs-5 text-decoration-none text-dark">EduLearn</Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="mx-3">
            <Link className="" to="/channel/create">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                className="bi bi-camera-video-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                />
              </svg>
            </Link>
          </div>
          <div>
            <Link className="mx-3" to="/notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                // fill="whitesmoke"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </Link>
          </div>
          <div className="mx-3">
            <Link className="text-dark" to="/search"><BsSearch /></Link>
          </div>
          <div>
            <div className="mx-3 " >
           
        
            </div>
          </div>
        </div>
      </div>



      <div className="for-pc py-3 container">
<div className="">
<Link to="/" className="d-flex align-items-center text-decoration-none"><div>      <i className="w-100 mx-1"><BsPlayBtnFill /></i></div>
<div>          EduLearn</div></Link>
  </div>
  <div className="d-flex w-50">
        <form onSubmit={handleSubmit}>
      <div className="w-100">
        <input className="w-100 px-4 py-2" style={{border:"none", backgroundColor:"#f1f1f1", borderRadius:20}} type="text" placeholder="Search" name="search" onChange={e=>setQuery(e.target.value)} />
        </div>
<span>            <button type="submit"  className="btn"><BsSearch /></button></span></form>
  </div>


  <div className="d-flex justify-content-between align-items-center">
    <div className="mx-md-3">
      <Link className="" to="/channel/create">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          className=" bi bi-camera-video-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
          />
        </svg>
      </Link>
    </div>
    <div className="mx-md-3">
      <Link className="" to="/notifications">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          // fill="whitesmoke"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      </Link>
    </div>

  
  <div>
            <div className="mx-3 " >
            <div className="dropdown">
  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <Link 
                className=""
                to="/user"
                role="button"
                >
                <img
                  className="img-fuid"
                  style={{ width: "25px", borderRadius: 20 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypACuX8ygmzipbD197uPBv40pqsvU8Egh-_Oo_xqg2OQqZbL1Cm-5XRxVcF3QjaocHCg&usqp=CAU"
                  />
              </Link>  </a>

  <ul className="dropdown-menu  " aria-labelledby="dropdownMenuLink">
    
    <li> {isLogin === 'true' ?  <Link className="dropdown-item  lead text-center fs-6" onClick={handleSignOut} to="/signin">Sign-out</Link>: 
     <Link  className="dropdown-item  lead text-center fs-6" to="/signin" onClick={handleSignIn}>Signin</Link>} </li>

 
  </ul>
</div>
        
            </div>
          </div>
     </div>

</div> */}

    </>
  );
};

export default Navbar;


