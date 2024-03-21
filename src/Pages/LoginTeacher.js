import React, { useEffect, useState } from 'react'
import './Page.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './Logo.png'
import axios from 'axios'
const LoginTeacher = () => {
  const navigate=useNavigate();
    const [data,setData]=useState({
        fid:"",
        password:"",
    });
    const [studentList,setStudentList]=useState([]);
    const handelData=(e)=>{
        console.log(data)
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(data.fid==="" || data.password===""){
            alert("ALL FIELDS ARE MANDATORY!");
            return;
        }
        else{
            try{
              const response=await axios.post("http://localhost:5000/LoginFaculty",data);
              console.log(response)
              studentList.map((val)=>{
                if(val.fid===data.fid && val.password===data.password){
                  navigate(`/WelcomeFaculty/${val._id}`);
                }
              })
              
            }
            catch(err){
              if(err.response.data.message==="INVALID"){
                alert("INVALID CREDENTIALS!");
              }
            }
          }
    }
    
    const getUsers=async()=>{
      try{
        const response=await axios.get("http://localhost:5000/FacultyList")
        console.log(response)
        setStudentList(response.data);
        console.log(studentList);
      }
      catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
      getUsers();
    },[])
  return (
    <>
    <Header/>
    <div className='login'>
    <form onSubmit={handleSubmit}>
    <img src={logo} alt='LOGO'></img>
    <h2 style={{color:"white",textDecoration:"underline"}}>FACULTY LOGIN</h2>
    <label>
    Faculty ID
    </label>
    <input type='text' placeholder='Enter Faculty ID' autoComplete='off' onChange={handelData} name='fid'></input>
    <label>
    Password
    </label>
    <input type='password' placeholder='Enter Password' autoComplete='off' onChange={handelData} name='password'></input>
    <button type='submit'>LOGIN</button>
    <NavLink to='/SignupPage'>Signup?</NavLink>
    <p>Fields Are Mandatory</p>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default LoginTeacher
