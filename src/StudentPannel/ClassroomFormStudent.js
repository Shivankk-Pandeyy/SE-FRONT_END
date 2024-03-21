import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import logo from './logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const ClassroomFormStudent = () => {
    const [classList,setClassList]=useState([]);
    const [classID,setClassID]=useState("");
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
        try{

        }
        catch(err){
            
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        classList.map((val)=>{
            if(val.code===data.code){
                setClassID(val._id);
                console.log(classID)
            }
        })
        if(data.name===""||data.code===""){
            return alert("All Fields Are Mandatory!");
        }
        else{
            try{
                const response=await axios.put(`http://localhost:5000/AddMember/${classID}`,data);
                console.log(response);
                alert("ClassRoom Found!");
                navigate(`/StudentClassroom/${id}`)
            }
            catch(err){
                console.log(err);
                if(err.response.data.message==="MEMBER ALREADY ADDED"){
                    alert("Already In The Class!")
                }
            }
        }
    }

    useEffect(()=>{
        getClass();
    },[]);
  return (
    <>
    <Header/>
    <div className='classroom-form'>
    <div className='classroomform'>
    <img src={logo} alt='STUDYLABS LOGO'></img>
    <form onSubmit={handleSubmit}>
    <label>CODE</label>
    <input type='text' placeholder='Enter Class Code' name='code' onChange={handleData} autoComplete='off'></input>
    <button type='submit'>Join ClassRoom</button>
    </form>
    </div>
    </div>
    <Footer/>
    </>
)
}

export default ClassroomFormStudent
