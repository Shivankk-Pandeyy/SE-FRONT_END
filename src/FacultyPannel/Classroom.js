import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import logo from './logo.png'
import axios from 'axios'
import del from './delete.png'
import { ToastContainer, toast } from 'react-toastify';
const Classroom = () => {
    const navigate=useNavigate()
    const not=()=>toast.error("CLASSROOM DELETED!")
    const {id}=useParams();
    const [classes,setClasses]=useState([]);
    const getUser=async()=>{
        const response=await axios.get("http://localhost:5000/ClassList");
        setClasses(response.data);
    }
    const deleteClass=async(identity)=>{
        try{
            const response=await axios.delete('http://localhost:5000/DeleteClass/'+identity);
            //console.log(response)
            not();
            navigate(`/FacultyClassroom/${id}`)
        }
        catch(err){
            console.log(err);
        }
    }
    const NAVIGATE=(uniquecode)=>{
        navigate(`/ViewClassFaculty/${uniquecode}`);
    }
    useEffect(()=>{
        getUser()
    },[deleteClass])
  return (
    <>
    <Header/>
    <div className='classroom'>
    <div className='classroom-header'>
    <h2>Welcome To StudyLabs Virtual ClassRooms</h2>
    <NavLink to={`/ClassroomForm/${id}`}>Create ClassRoom</NavLink>
    </div>
    <div className='member-display'>
    {
        classes.map((val)=>{
            if(val.head===id){
                return(
                    <div className='member-card'>
    <div className='member-info'>
    <p>Class Name:<span>{val.name}</span></p>
    <p>Joining Code:<span>{val.code}</span></p>
    <img src={del} alt='DELETE' title='Delete Class' onClick={(e)=>deleteClass(val._id)}></img>
    </div>
    <div className='member-photo'>
    <img src={logo} alt='OUR LOGO' title='Tap To View ClassRoom' onClick={(e)=>NAVIGATE(val.code)}></img>
    </div>
    </div>
                )
            }
        })
    }
    </div>
    </div>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default Classroom
