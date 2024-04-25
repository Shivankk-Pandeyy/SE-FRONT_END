import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import logo from './logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
const ClassroomFormStudent = () => {
    const not1=()=>toast.error("ALL FIELDS ARE MANDATORY!")
    const not2=()=>toast.error("ALREADY IN CLASS!")
    const not3=()=>toast.error("NO CLASS FOUND!")
    const [classList,setClassList]=useState([]);

    const navigate=useNavigate();
    const {id}=useParams();
    const [data,setData]=useState({
        code:"",
        sid:id,
    })
    const handleData=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const getClass=async()=>{
        try{
            const response=await axios.get('http://localhost:5000/ClassList');
            setClassList(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const AddStudents=async()=>{
        classList.map(async(val)=>{
            if(val.code===data.code){
                try{
                    const response=await axios.post(`http://localhost:5000/AddStudent/${id}`,data);
                    console.log(response);
                    navigate(`/StudentClassroom/${id}`)
                }
                catch(err){
                    if(err.response.data.message==="MEMBER ALREADY ADDED"){
                        not2();
                }
            }
            }
        })
        not3()
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        classList.map((val)=>{
            if(val.code===data.code){
                
                //console.log(classID)
            }
        })
        if(data.name===""||data.code===""){
            return not1()
        }
    }

    useEffect(()=>{
        getClass();
    },[]);
  return (
    <>
    <ToastContainer/>
    <Header/>
    <div className='classroom-form'>
    <div className='classroomform'>
    <img src={logo} alt='STUDYLABS LOGO'></img>
    <form onSubmit={handleSubmit}>
    <label>CODE</label>
    <input type='text' placeholder='Enter Class Code' name='code' onChange={handleData} autoComplete='off'></input>
    <button type='submit' onClick={AddStudents}>Join ClassRoom</button>
    </form>
    </div>
    </div>
    <Footer/>
    </>
)
}

export default ClassroomFormStudent
