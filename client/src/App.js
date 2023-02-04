import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home";
import Create from "./components/Create";
import VideoPage from "./pages/VideoPage"
import {useEffect, useState} from "react"
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import "./app.css"
import Notifications from "./pages/Notifications";
import Search from "./components/Search"
import User from "./components/User"
import UserContext from './context/UserCreateContext'


function App() {

  const [isLogin, setIsLogin] =useState("false")

useEffect(() => {
  setIsLogin(window.localStorage.getItem("isLogin"))
}, [isLogin])
  

  return (
    <>
    <div className="App">
    <UserContext.Provider value={{isLogin, setIsLogin}}>
    <Router>
      <Routes>

 
         <Route path = "/" exact element = {isLogin === 'true' ? <Home/>: <Signin/> } />
       <Route path = "/channel/create" element = {isLogin === 'true' ?<Create/> : <Signin/>} /> 
        <Route path = "/watch/:id" element = {isLogin === 'true' ?<VideoPage/> : <Signin/>} />
        <Route path = "/search" exact element = {isLogin === 'true' ?<Search /> : <Signin/>} />
        <Route path = "/user" element = {isLogin === 'true' ?<User /> : <Signin/>} />
        <Route path = "/notifications" element = {isLogin === 'true' ? <Notifications/> : <Signin/>} />

        <Route path = "/signin" exact element = {<Signin/>} />
  <Route path = "/signin/register" element = {<Register/>} />

      </Routes>
    </Router>
    </UserContext.Provider>
    </div>
    </>
  );
}

export {UserContext};
export default App;

