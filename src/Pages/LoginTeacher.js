import React, { useEffect, useState } from 'react'
import './Page.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './Logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginTeacher = () => {
  const notify1 = () => toast.error("ALL FIELDS ARE MANDATORY!");
  const notify2 = () => toast.error("INVALID DETAILS");
  const navigate=useNavigate();
    const [data,setData]=useState({
        fid:"",
        password:"",
    });
    const [studentList,setStudentList]=useState([]);
    const handelData=(e)=>{
        //console.log(data)
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(data.fid==="" || data.password===""){
            notify1()
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
              //console.log(err.response.data.message)
              if(err.response.data.message==="INVALID"){
                notify2();
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
    <ToastContainer />
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
