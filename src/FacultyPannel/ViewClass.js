import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import welcome from './welcome.gif'
import axios from 'axios'
const ViewClass = () => {
  const [classes,setClasses]=useState([]);
  const [TID,setTID]=useState("");
  const getUser=async()=>{
    const response=await axios.get("http://localhost:5000/ClassList");
    setClasses(response.data);
    response.data.map((val)=>{
      if(val.code===id){
        setTID(val.head);
      }
    })
}
  const {id}=useParams()
  useEffect(()=>{
    getUser()
  },[]);
  return (
    <>
    <div className='classroom'>
    <div className='classroom-header'>
    <NavLink to={`/AssignmentUploadFaculty/${id}`}>Assignment Upload</NavLink>
    <NavLink to={`/QuizUploadFaculty/${id}`}>Quiz Upload</NavLink>
    <NavLink to={`/NotesUploadFaculty/${id}`}>Notes Upload</NavLink>
    <NavLink to={`/FacultyClassroom/${TID}`}>RETURN</NavLink>
    </div>
    <div className='view'>
    <img src={welcome}></img>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ViewClass
