import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import logo from './logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
const ClassroomForm = () => {
    const not1=()=>toast.error("ALL FIELDS ARE MANDATORY!");
    const not2=()=>toast.error("CODE ALREADY TAKEN");
    const not3=()=>toast.success("CLASSROOM CREATED");
    const navigate=useNavigate();
    const {id}=useParams();
    const [data,setData]=useState({
        name:"",
        code:"",
        head:id,
    })
    const handleData=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(data.name===""||data.code===""){
            return not1();
        }
        else{
            try{
                const response=await axios.post("http://localhost:5000/CreateClassroom",data);
                console.log(response);
                not3()
                navigate(`/FacultyClassroom/${id}`)
            }
            catch(err){
                if(err.response.data.message==="CODE"){
                    return not2();
                }
            }
        }
    }
  return (
    <>
    <ToastContainer/>
    <Header/>
    <div className='classroom-form'>
    <div className='classroomform'>
    <img src={logo} alt='STUDYLABS LOGO'></img>
    <form onSubmit={handleSubmit}>
    <label>Class Name</label>
    <input type='text' placeholder='Enter Class Name' name='name' onChange={handleData} autoComplete='off'></input>
    <label>Enter Joining Code</label>
    <input type='text' placeholder='Enter Joining Code' name='code' onChange={handleData} autoComplete='off'></input>
    <button type='submit'>Create ClassRoom</button>
    </form>
    </div>
    </div>
    <Footer/>
    </>
)
}

export default ClassroomForm
