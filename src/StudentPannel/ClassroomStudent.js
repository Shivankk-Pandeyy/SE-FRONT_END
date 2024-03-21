import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { NavLink, useParams } from 'react-router-dom'
import logo from './logo.png'
import axios from 'axios'
const ClassroomStudent = () => {
    const {id}=useParams();
    const [classes,setClasses]=useState([]);
    const getUser=async()=>{
        const response=await axios.get("http://localhost:5000/ClassList");
        setClasses(response.data);
        response.data.map((val)=>{
            console.log(val.members)
        })
        
    }
    useEffect(()=>{
        getUser()
    },[])
  return (
    <>
    <Header/>
    <div className='classroom'>
    <div className='classroom-header'>
    <h2>Welcome To StudyLabs Virtual ClassRooms</h2>
    <NavLink to={`/ClassroomFormStudent/${id}`}>Join Classroom</NavLink>
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
    </div>
    <div className='member-photo'>
    <img src={logo} alt='STUDENT' title='Tap To View ClassRoom'></img>
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
