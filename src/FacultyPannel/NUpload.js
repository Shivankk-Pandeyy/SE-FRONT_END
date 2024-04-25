import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import Footer from './Components/Footer'
import logo from './logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const NUpload = () => {
  const not1=()=>toast.error("ALL FIELDS ARE MANDATORY!");
  const not2=()=>toast.success("NOTES UPLOADED!");
  const not3=()=>toast.error("NOTES DELETED!");
  const [AA,setAA]=useState([]);
  const [TID,setTID]=useState("");
  const {id}=useParams();
  const getUser=async()=>{
    const response=await axios.get("http://localhost:5000/ClassList");
    response.data.map((val)=>{
      if(val.code===id){
        setTID(val.head);
      }
    })
}  
const getPDF=async()=>{
  const response=await axios.get("http://localhost:5000/UNP");
  setAA(response.data);
}
const DELPDF=async(pdfID)=>{
const response=await axios.delete("http://localhost:5000/DELN/"+pdfID);
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
      const response=await axios.post("http://localhost:5000/UN",formData);
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
    <label>Enter Notes Name</label>
    <input type='text' placeholder='ENTER NOTES NAME' autoComplete='off' name='name' onChange={(e)=>{
      setPdfInfo({
        name:e.target.value,
        code:id,
        head:TID,
      })
    }} value={pdfInfo.name}></input>
    <label>Upload NOTES</label>
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
            <button onClick={(e)=>{OPENPDF(val.pdf)}}>VIEW NOTES</button>
            <button onClick={(e)=>DELPDF(val._id)}>DELETE NOTES</button>
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

export default NUpload
