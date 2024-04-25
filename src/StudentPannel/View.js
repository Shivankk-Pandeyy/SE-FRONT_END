import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import welcome from './welcome.gif'
import axios from 'axios'
const View = () => {
  const [classes,setClasses]=useState([]);
  const [student,setStudent]=useState([]);
  const [TID,setTID]=useState("");
  const getUser=async()=>{
      const response=await axios.get("http://localhost:5000/ClassList");
      setClasses(response.data);
  }
  const {id}=useParams()
  const getStudent=async()=>{
    const response=await axios.get("http://localhost:5000/ClassListStudent");
    setStudent(response.data);
    response.data.map((val)=>{
      if(val.code===id){
        setTID(val.sid);
      }
    })
}
  useEffect(()=>{
    getUser()
    getStudent()
  },[]);
  return (
    <>
    <div className='classroom'>
    <div className='classroom-header'>
    <NavLink to={`/AssignmentUploadStudent/${id}`}>Assignment View</NavLink>
    <NavLink to={`/QuizUploadStudent/${id}`}>Quiz View</NavLink>
    <NavLink to={`/NotesUploadStudent/${id}`}>Notes Section</NavLink>
    <NavLink to={`/StudentClassroom/${TID}`}>RETURN</NavLink>
    </div>
    <div className='view'>
    <img src={welcome}></img>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default View
