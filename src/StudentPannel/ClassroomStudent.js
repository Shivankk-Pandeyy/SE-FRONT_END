import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import logo from './logo.png'
import axios from 'axios'
import del from './delete.png'
import { ToastContainer, toast } from 'react-toastify';
const ClassroomStudent = () => {
    const navigate=useNavigate();
    const not=()=>toast.error("LEFT CLASSROOM")
    const {id}=useParams();
    const [stu,setStu]=useState([]);
    const [classes,setClasses]=useState([]);
    const [info,setInfo]=useState({
        sid:id,
        code:"",
        name:"",
    })
    const getUser=async()=>{
        const response=await axios.get("http://localhost:5000/ClassList");
        setClasses(response.data);
    }
    const getClassStudent=async()=>{
        try{
            const response=await axios.get('http://localhost:5000/ClassListStudent');
            //console.log(response)
            setStu(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    const deleteClass=async(identity)=>{
        try{
            const response=await axios.delete('http://localhost:5000/DeleteStudent/'+identity);
            //console.log(response)
            not();
            navigate(`/StudentClassroom/${id}`)
        }
        catch(err){
            console.log(err);
        }
    }
    const NAVIGATE=(uniquecode)=>{
        navigate(`/ViewClassStudent/${uniquecode}`)

    }
    useEffect(()=>{
        getUser()
        getClassStudent()
    },[deleteClass])
  return (
    <>
    <Header/>
    <ToastContainer/>
    <div className='classroom'>
    <div className='classroom-header'>
    <h2>Welcome To StudyLabs Virtual ClassRooms</h2>
    <NavLink to={`/ClassroomFormStudent/${id}`}>Join Classroom</NavLink>
    </div>
    <div className='member-display'>
    {
        stu.map((val)=>{
            if(val.sid===id){
                
                return(
                    <div className='member-card'>
        <div className='member-info'>
        <p>Class Name:<span>{val.name}</span></p>
        <p>Joining Code:<span>{val.code}</span></p>
        <img src={del} alt='DELETE' title='Delete Class' onClick={(e)=>deleteClass(val._id)}></img>
        </div>
        <div className='member-photo'>
        <img src={logo} alt='STUDENT' title='Tap To View ClassRoom' onClick={(e)=>{
            NAVIGATE(val.code);
        }}></img>
        </div>
        </div>
                )
            }
        })
    }
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ClassroomStudent
