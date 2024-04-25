import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import Footer from './Components/Footer'
import logo from './logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QUpload = () => {
  const not1=()=>toast.error("ALL FIELDS ARE MANDATORY!");
  const not2=()=>toast.success("QUIZ UPLOADED!");
  const not3=()=>toast.error("QUIZ DELETED!");
  const [classes,setClasses]=useState([]);
  const [AA,setAA]=useState([]);
  const [TID,setTID]=useState("");
  const {id}=useParams();
  const getUser=async()=>{
    const response=await axios.get("http://localhost:5000/ClassList");
    setClasses(response.data);
    response.data.map((val)=>{
      if(val.code===id){
        setTID(val.head);
      }
    })
}
const getPDF=async()=>{
  const response=await axios.get("http://localhost:5000/UQP");
  setAA(response.data);
}
const DELPDF=async(pdfID)=>{
const response=await axios.delete("http://localhost:5000/DELQ/"+pdfID);
not3();
}
const [pdfInfo,setPdfInfo]=useState({
  name:"",
  code:id,
  head:TID,
})
const [file,setFile]=useState("");
const submitpdf=async(e)=>{
  await e.preventDefault();
  if(pdfInfo.name==="" || file===""){
      return not1()
  }
  const formData=await new FormData();
  await formData.append("name",pdfInfo.name);
  await formData.append("file",file);
  await formData.append("head",pdfInfo.head);
  await formData.append("code",pdfInfo.code);
  try{
      const response=await axios.post("http://localhost:5000/UQ",formData);
      not2()
  }
  catch(err){ 
      console.log(err);
  }
}
const OPENPDF=(pdfPath)=>{
  window.open("http://localhost:5000/files/"+pdfPath);
}
useEffect(()=>{
  getPDF();
},[DELPDF]);
useEffect(()=>{
  getUser()
},[])
  return (
    <>
    <ToastContainer/>
    <div className='classroom'>
    <div className='classroom-header'>
    <NavLink to={`/AssignmentUploadFaculty/${id}`}>Assignment Upload</NavLink>
    <NavLink to={`/QuizUploadFaculty/${id}`}>Quiz Upload</NavLink>
    <NavLink to={`/NotesUploadFaculty/${id}`}>Notes Upload</NavLink>
    <NavLink to={`/FacultyClassroom/${TID}`}>RETURN</NavLink>
    </div>
    <div className='uploads'>
    <div className='u1'>
    <form onSubmit={submitpdf}>
    <label>Enter Quiz Name</label>
    <input type='text' placeholder='ENTER QUIZ NAME' autoComplete='off' name='name' onChange={(e)=>{
      setPdfInfo({
        name:e.target.value,
        code:id,
        head:TID,
      })
    }}></input>
    <label>Upload QUIZ</label>
    <input type="file" accept="application/pdf"  placeholder='Enter PDF' onChange={(e)=>setFile(e.target.files[0])}></input>
    <button type='submit'>UPLOAD</button>
    </form>
    </div>
    <div className='u2'> 
    {
      AA.map((val)=>{
        if(val.head===TID && val.code===id){
          return(
            <div className='u3'>
            <h2>{val.name}</h2>
            <button onClick={(e)=>{OPENPDF(val.pdf)}}>VIEW QUIZ</button>
            <button onClick={(e)=>DELPDF(val._id)}>DELETE QUIZ</button>
            <img src={logo} alt='OUR LOGO'></img>
            </div>
          )
        }
      })
    }
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default QUpload
