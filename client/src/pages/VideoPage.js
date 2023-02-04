import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import CreateComment from "../components/CreateComment";
import './videopage.css'
// import ShowComments from "../components/ShowComments";

const VideoPage = () => {
  const idObject = useParams();
  const [data, setData] = React.useState({});
  const [recommnededData, setRecommendedData] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false)
//   const [updatedData, setUpdatedData] = React.useState({});
  const [views, setViews] = React.useState(0);
  // const [id, setId] = React.useState(undefined);

  useEffect(() => {
    const id = idObject.id
    axios.get(`http://localhost:8000/channel/videos/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
      
      const idobj= {id: data._id}

      axios.put("http://localhost:8000/channel/videos/view", idobj)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  
    },[]);



    useEffect(() => {
      axios.get("http://localhost:8000/channel/videos",{params:{
        tag: data.tags
      }})
      .then((res) => setRecommendedData(res.data))
      .catch((err) => console.log(err));
      // console.log(recommnededData)
      axios.get(`http://localhost:8000/comment/${data._id}`).then(res=>setComments(res.data)).catch(err=>console.log(err))
    //  console.log(comments.userID)
   
    });

const handleChange=()=>{
  const path = window.location.href
  window.navigator.clipboard.writeText(path)

  setShowAlert(true)
}

const handleSubscribe = () =>{
// const id = 
// console.log(id)
const idobj= {id: window.localStorage.getItem("user")}
axios.post("http://localhost:8000/channel/videos/subscribe",idobj).then(res=>console.log(res)).catch(err=>console.log(err))
}

  const handleClick = (e)=>{


    axios.get(`http://localhost:8000/watch/${e.target.value._id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
    
  }

  return (
    <>
      {/* for mobiles */}
        <Navbar />
 
      <div id="for-mobile" className="container-fluid lead" style={{}}>
        <div className="row">
          <div className="col-md-8">

<div className="">
<iframe className="w-100  " style={{height:"200px"}} src={data.videoURL} controls></iframe>
</div>
            <div className=" d-flex justify-content-between px-md-4">
            <div className="row">
            <div className="col-md-6">
                <div className="">
                  <h4 className="fs-6">{data.title}</h4>
                </div>

                <div className="">
                  <div className="">
                    <p  style={{ fontSize: 16, color: "grey" }}>
   <small style={{fontSize:11}}>{data.views} views</small> 
                      {data.Date ? <small style={{fontSize:11}}> | {data.Date.slice(0,10)}</small> : null}

                    </p>
                  </div>

    </div>

              </div>

              <div className="d-flex align-items-center col-md-6">
       
<span className="mx-2 btn btn-light" type="button" style={{borderRadius:20}} onClick={handleChange}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>
</span>

<span className="mx-2 btn btn-light" type="button" style={{borderRadius:20}} onClick={handleChange}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
  <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
</svg>
</span>

<span className="mx-2 btn btn-light" type="button" style={{borderRadius:20}} onClick={handleChange} data-toggle="tooltip" data-placement="top" title="Copy URL">
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 18 18">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg>
</span>

{
  window.localStorage.getItem("user") !=  data.userID ? <button className=" btn btn-danger  px-4" type="button" style={{borderRadius:20}} onClick={handleSubscribe} data-toggle="tooltip" data-placement="top" title="Copy URL">
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
 <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg> */}
<small className="lead fs-6 mx-1">Subscribe</small>
</button> : null



}
{/* {
  
// console.log("id-" + window.localStorage.getItem("user"))
console.log("idd"+data._id)
} */}
              </div>

              <div className="">
              <hr/>
                  <p className="mt-3 lead fs-5">Discription</p>
                    <p className="text-muted fs-6">{data.disp}</p>
                  </div>

            </div>
            </div>
            </div>
            <CreateComment v_Id={data._id} />
            {/* <ShowComments data={comments}/> */}
            {
        comments.map(comment=>(
          <div className='bg-light p-3 mt-2 fs-6'>
          <p> {comment.name}<small className='text-muted'><b>  |  {comment.Date ? comment.Date.slice(0,10):comment.Date}</b> </small></p>
          <p>{comment.desc}</p></div>
        ))
      }
          </div>




          
          <div className="col-md-4 p-2">
          <h1 className="text-muted lead text-center">Recommendations</h1>
          <div className="mt-2 p-3">
            
          {
            recommnededData.map(i=>(
              <Link className="text-decoration-none" onClick={handleClick} to={`/watch/${i._id}`}>
              <div className=" d-flex p-3">
                  <span style={{width:"40%",}}><img className="img-fluid " src={i.imageURL} alt="" /></span>
                  <div className="px-2">
                    <h6 className=" text-left">{i.title}</h6>
                    <small className="text-light " style={{fontSize:"12px"}}>Lama Dev</small>
                   
                  </div>
                </div>
              </Link>
            ))
          }
          </div>
          </div>
      
      </div>



      {/* for pc */}
      
      <div id="for-pc" className="container-fluid lead" style={{}}>
        <div className="row">
          <div className="col-md-8">

<div className="">
<iframe className="w-100 " style={{height:500}} src={data.videoURL} controls></iframe>
</div>
            <div className=" d-flex justify-content-between px-md-4">
            <div className="row">
            <div className="col-md-6">
                <div className="">
                  <h4>{data.title}</h4>
                </div>

                <div className="">
                  <div className="">
                  {data.Date ? <p  style={{ fontSize: 16, color: "grey" }}>
                      <small style={{fontSize:16}}>{data.views} views</small> |
                       {data.Date.slice(0,10)}
                    </p>
                    : null}
                  </div>
   
                </div>

              </div>

              <div className="d-flex align-items-center col-md-6">
       
<span className="mx-2 btn btn-light" type="button" style={{borderRadius:20}} onClick={handleChange}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>
</span>

<span className="mx-2 btn btn-light" type="button" style={{borderRadius:20}} onClick={handleChange}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
  <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
</svg>
</span>

<span className="mx-2 btn btn-light" type="button" style={{borderRadius:20}} onClick={handleChange} data-toggle="tooltip" data-placement="top" title="Copy URL">
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 18 18">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg>
</span>

<button className=" btn btn-danger  px-4" type="button" style={{borderRadius:20}} onClick={handleChange} data-toggle="tooltip" data-placement="top" title="Copy URL">
   {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg> */}
<small className="lead fs-6 mx-1">Subscribe</small>
</button>

              </div>

              <div className="">
              <hr/>
                  <p className="mt-3 lead text-light">Discription</p>
                    <p className="text-muted">{data.disp}</p>
                  </div>

            </div>
            </div>

            <CreateComment v_Id={data._id} />
            {/* <ShowComments data={comments}/> */}
       {
        comments.map(comment=>(
          <div className='bg-light p-3 mt-2 fs-6'>
          <p> {comment.name}<small className='text-muted'><b>  |  {comment.Date ? comment.Date.slice(0,10):comment.Date}</b> </small></p>
          <p>{comment.desc}</p></div>
        ))
      }
      </div>


          
          <div className="col-md-4 p-2">
          <h1 className="text-muted lead text-center">Recommendations</h1>
          <div className="mt-2 p-3">
            
          {
            recommnededData.map(i=>(
              <Link className=" text-decoration-none" onClick={handleClick} to={`/watch/${i._id}`}>
              <div className="bg-light mt-2 d-flex p-3">
                  <span style={{width:"40%",}}><img className="img-fluid " src={i.imageURL} /></span>
                  <div className="px-2">
                    <h6 className=" text-left text-muted lead fs-6">{i.title}</h6>
                    <small className="text-muted " style={{fontSize:"12px"}}>{i.views} views | {i.Date ? i.Date.slice(0,10): i.Date}</small>
                   
                  </div>
                </div>
              </Link>
            ))
          }
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
