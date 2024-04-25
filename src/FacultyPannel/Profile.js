import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './Welcome.css'
import logo from './logo.png'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Profile = () => {
  const navigate=useNavigate()
    const {id}=useParams();
    const [student,setStudent]=useState([]);
    const getUsers=async()=>{
        try{
          const response=await axios.get("http://localhost:5000/FacultyList")
          setStudent(response.data);
          console.log(student)
        }
        catch(err){
          console.log(err);
        }
      }
      const changePage=()=>{
        navigate(`/ProfileUpdateFaculty/${id}`)
      }
    useEffect(()=>{
        getUsers();
    },[])
  return (
    <>
    <Header/>
    <div className='profile-student'>
    {
        student.map((val)=>{
            if(val._id===id){
                return(
                    <div className='student-info'>
    <img src={logo} alt='STUDYLABS LOGO'></img>
    <h2 style={{color:"#fdf0d5"}}>FACULTY PROFILE</h2>
    <h2>Name</h2>
    <div className='box'>
    <p>{val.name}</p>
    </div>
    <h2>Faculty ID</h2>
    <div className='box'>
    <p>{val.fid}</p>
    </div>
    <h2>Email</h2>
    <div className='box'>
    <p>{val.email}</p>
    
    </div>
    
    <button onClick={changePage}>UPDATE PASSWORD</button>
    </div>
                )
            }
        })
    }
    </div>
    <Footer/>
    </>
  )
}

export default Profile
