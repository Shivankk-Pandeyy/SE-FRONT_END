import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import logo from './logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import INTRO from './INTRO.gif'
const QUpload = () => {
  const [classes,setClasses]=useState([]);
  const [student,setStudent]=useState([]);
  const [TID,setTID]=useState("");
  const {id}=useParams();
  const getUser=async()=>{
    const response=await axios.get("http://localhost:5000/ClassList");
    setClasses(response.data);
}
const getStudent=async()=>{
  const response=await axios.get("http://localhost:5000/ClassListStudent");
  setStudent(response.data);
  response.data.map((val)=>{
    if(val.code===id){
      setTID(val.sid);
    } 
  })
}
const getPDF=async()=>{
  const response=await axios.get("http://localhost:5000/UQP");
  setAA(response.data);
}
const [AA,setAA]=useState([]);
const [file,setFile]=useState("");
const OPENPDF=(pdfPath)=>{
  window.open("http://localhost:5000/files/"+pdfPath);
}
useEffect(()=>{
  getUser()
  getPDF();
  getStudent()
},[]);
  return (
    <>
    <ToastContainer/>
    <div className='classroom'>
    <div className='classroom-header'>
    <NavLink to={`/AssignmentUploadStudent/${id}`}>Assignment View</NavLink>
    <NavLink to={`/QuizUploadStudent/${id}`}>Quiz View</NavLink>
    <NavLink to={`/NotesUploadStudent/${id}`}>Notes Section</NavLink>
    <NavLink to={`/StudentClassroom/${TID}`}>RETURN</NavLink>
    </div>
    <div className='uploads'>
    <div className='u1'>
    <img src={INTRO} alt='STUDENT SERVICES'></img>
    </div>
    <div className='u2'> 
    {
      AA.map((val)=>{
        if( val.code===id){
          return(
            <div className='u3'>
            <h2>{val.name}</h2>
            <button onClick={(e)=>{OPENPDF(val.pdf)}}>VIEW QUIZ</button>
            <img src={logo} alt='OUR LOGO'></img>
            </div>
          )
        }
      })
    }
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default QUpload
