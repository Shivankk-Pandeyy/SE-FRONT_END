import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import search from './search.png'
import axios from 'axios'
import studentpic from '../Pages/students.png'
import teacherpic from '../Pages/training.png'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MemberList = () => {
  const not1=()=>toast.warning("SEARCHING!");
  const not2=()=>toast.success("USER FOUND!");
  const not3=()=>toast.error("ENTER VALID DETAILS!");
  const {id}=useParams()
  const navigate=useNavigate()
  const [teacher,setTeacher]=useState([]);
  const [student,setStudent]=useState([]);
  const [info,setInfo]=useState("");
  const [found,setFound]=useState({
    name:"",
    email:"",
    id:"",
    st:false,
  })
  const getUsers=async()=>{
    try{
      const response=await axios.get("http://localhost:5000/StudentList")
      //console.log(response)
      setStudent(response.data);
      //console.log(student);
      const response1=await axios.get("http://localhost:5000/FacultyList")
      //console.log(response1)
      setTeacher(response1.data);
      //console.log(teacher);
    }
    catch(err){
      //console.log(err);
    }
  }
  const Searching=()=>{
    if(info===""){
      not3()
    }
    student.map((val)=>{
      if(val===""){
       // alert("hiiii")
      }
      if(val.email===info||val.sid===info){
        setFound({
          name:val.name,
          email:val.email,
          id:val.sid,
          st:true,
        })
        not1()
        not2()
        //console.log(found)
      }
    })
    teacher.map((val)=>{
      if(val===""){
        //alert("hiiii")
      }
      if(val.email===info || val.name===info || val.fid===info){
        setFound({
          name:val.name,
          email:val.email,
          id:val.fid,
          st:false,
        })
        //console.log(found)
        not1()
        not2()
      }
    })
  }
  const viewProfile=()=>{
    navigate(`/ProfileStudentView/${id}`)
  }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <>
    <ToastContainer/>
    <Header/>
    <div className='search-box'>
    <div className='searching'>
    <p>ENTER DETAILS</p>
    <input type='text' placeholder='Enter ID/Email' onChange={(e)=>setInfo(e.target.value)}></input>
    <img src={search} alt='SEARCH ICON' title='Tap To Search' onClick={Searching}></img>
    </div>
    <div className='member-display'>
    <div className={info?'member-card-found':'member-card-hidden'}>
    <div className='member-info'>
    <p><span>Name:</span>{found.name}</p>
    <p><span>Email:</span>{found.email}</p>
    <p><span>ID:</span>{found.id}</p>
    </div>
    <div className='member-photo'>
    <img src={found.st?studentpic:teacherpic} alt='STUDENT' title='VIEW PROFILE' onClick={viewProfile}></img>
    </div>
    </div>
    {
      student.map((val)=>{
        return(
          <div className='member-card'>
    <div className='member-info'>
    <p><span>Name:</span>{val.name}</p>
    <p><span>Email:</span>{val.email}</p>
    <p><span>ID:</span>{val.sid}</p>
    </div>
    <div className='member-photo'>
    <img src={studentpic} alt='STUDENT' title='STUDENT ACCOUNT' onClick={viewProfile}></img>
    </div>
    </div>
        )
      })
    }
    {
      teacher.map((val)=>{
        return(
          <div className='member-card'>
    <div className='member-info'>
    <p><span>Name:</span>{val.name}</p>
    <p><span>Email:</span>{val.email}</p>
    <p><span>ID:</span>{val.fid}</p>
    </div>
    <div className='member-photo'>
    <img src={teacherpic} alt='TEACHER' title='FACULTY ACCOUNT' onClick={viewProfile}></img>
    </div>
    </div>
        )
      })
    }
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default MemberList
