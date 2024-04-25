import React, { useState } from 'react'
import './Page.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './Logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignupTeacher = () => {
  const notify1 = () => toast.error("ALL FIELDS ARE MANDATORY!");
  const notify2 = () => toast.error("INVALID DETAILS!");
  const notify3 = () => toast.error("SIGNUP SUCCESSFULL!");
  const notify5 = () => toast.error("ID EXISTS");
  const notify6 = () => toast.error("EMAIL EXISTS");
  const notify7 = () => toast.error("INVALID EMAIL");
  const navigate=useNavigate();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [data,setData]=useState({
    name:"",
    sid:"",
    email:"",
    password:"",
  });
  const handleData=(e)=>{
    const {name,value}=e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit=async(e)=>{
    const isValidEmail = emailRegex.test(data.email);
    console.log(isValidEmail);
    console.log(data)
    e.preventDefault();
    
    if(data.name==="" || data.sid==="" || data.email==="" || data.password===""){
      notify1()
      return;
    }
    if(!isValidEmail){
      notify7()
      return;
    }
    else{
      try{
        const response=await axios.post("http://localhost:5000/SignupStudent",data);
        console.log(response)
        //alert("SIGNUP SUCCESSFUL")
        navigate('/LoginPage');
      }
      catch(err){
        console.log(err);
        if(err.response.data.message==="EMAIL"){
          notify6()
        }
        else if(err.response.data.message==="ID"){
        notify5()
        }
      }
    }
  }
  return (
    <>
    <ToastContainer/>
    <Header/>
    <div className='login'>
    <form onSubmit={handleSubmit}>
    <img src={logo} alt='LOGO'></img>
    <h2 style={{color:"white"}}>STUDENT SIGNUP</h2>
    <label>
    Name
    </label>
    <input type='text' placeholder='Enter Name' autoComplete='off' name='name' onChange={handleData}></input>
    <label>
    Student ID
    </label>
    <input type='text' placeholder='Enter Student ID' autoComplete='off' name='sid' onChange={handleData}></input>
    <label>
    Email
    </label>
    <input type='text' placeholder='Enter Email' autoComplete='off' name='email' onChange={handleData}></input>
    <label>
    Password
    </label>
    <input type='password' placeholder='Enter Password' autoComplete='off' name='password' onChange={handleData}></input>
    <button type='submit'>SIGNUP</button>    
    <NavLink to='/LoginPage'>Already An User?</NavLink>
    <p>Fields Are Mandatory</p>
    </form>
    </div>
    <Footer/>
    </>
  )
}
export default SignupTeacher
