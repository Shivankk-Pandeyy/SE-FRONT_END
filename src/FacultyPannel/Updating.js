import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './Welcome.css'
import logo from './logo.png'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Updating = () => {
  const not1=()=>toast.error("INVALID PASSWORD")
  const navigate=useNavigate()
    const [pass,setPass]=useState({
      password:""
    });
    const {id}=useParams();
    const [student,setStudent]=useState([]);
    const getUsers=async()=>{
        try{
          const response=await axios.get("http://localhost:5000/FacultyList")
          setStudent(response.data);
          //console.log(student)
        }
        catch(err){
          //console.log(err);
        }
      }
      const HandleData=(e)=>{
        const {name,value}=e.target
        setPass({
          ...pass,
          [name]:value
        })
      }
      const submitData=async()=>{
          if(pass.password===""){
            not1()
          }
          else{
            try{
              const response=await axios.put("http://localhost:5000/UpdateFacultyPassword/"+id,pass)
              console.log(response);
              //alert('Password Updated Successfully!')
              navigate(`/ProfileFaculty/${id}`);
            }
            catch(err){
              //console.log(err);
            }
          }


      }
    useEffect(()=>{
        getUsers();
    },[])
  return (
    <>
    <Header/>
    <ToastContainer/>
    <div className='profile-student'>
    {
        student.map((val)=>{
            if(val._id===id){
                return(
                    <div className='student-info'>
    <img src={logo} alt='STUDYLABS LOGO'></img>
    <h2 style={{color:"#fdf0d5"}}>FACULTY PROFILE</h2>
    <h2>Previous Password</h2>
    <div className='box'>
    <p>{val.password}</p>
    </div>
    <h2>Enter New Password</h2>
    <div className='box'>
    <input type='text' placeholder='Enter New Password' autoComplete='off' onChange={HandleData} name='password'></input>
    </div>
    
    <button onClick={submitData}>UPDATE</button>
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

export default Updating
