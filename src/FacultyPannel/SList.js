import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import logo from './logo.png'
import axios from 'axios'
const SList = () => {
    const [classes,setClasses]=useState([]);
    const [student,setStudent]=useState([]);//CLASS STUDENT
    const [sinfo,setSInfo]=useState([]);//GENERAL ALL STUDENTS
    const [TID,setTID]=useState("");
    const {id}=useParams();
    const getUser=async()=>{
      const response=await axios.get("http://localhost:5000/ClassList");
      setClasses(response.data);
      response.data.map((val)=>{
        if(val.code===id){
          setTID(val.head);
        }
      })
  }
  const getStudent=async()=>{
    const response=await axios.get("http://localhost:5000/ClassListStudent");
    setStudent(response.data);
}
const getINFO=async()=>{
  const response=await axios.get("http://localhost:5000/StudentList");
  setSInfo(response.data);
}
  useEffect(()=>{
    getUser()
    getStudent()
    getINFO()
  },[])
  return (
    <>
    <div className='classroom'>
    <div className='classroom-header'>
    <NavLink to={`/AssignmentUploadFaculty/${id}`}>Assignment Upload</NavLink>
    <NavLink to={`/QuizUploadFaculty/${id}`}>Quiz Upload</NavLink>
    <NavLink to={`/NotesUploadFaculty/${id}`}>Notes Upload</NavLink>
    <NavLink to={`/StudentListFaculty/${id}`}>View Students</NavLink>
    <NavLink to={`/FacultyClassroom/${TID}`}>RETURN</NavLink>
    </div>
    <div className='uploads1'>
    {
      student.map((val)=>{
        sinfo.map((x)=>{
          if(val.code==id){
            return(
              <h2>HELLO</h2>
            )
          }
        })
      })
    }
    <div className='slist'>
    <h2>NAME</h2>
    <h2>REG NUMBER</h2>
    <h2>REMOVE STUDENT</h2>
    <img src={logo}></img>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default SList
