import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Footer from './Components/Footer'
import logo from './logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NUpload = () => {
  const [AA,setAA]=useState([]);
  const notify1=()=>toast.error("WRITE SOMETHING TO STORE!")
  const notify2=()=>toast.success("NOTES SAVED")
  const notify3=()=>toast.error("DELETED") 
  const [notes,setNotes]=useState([]);
  const [TID,setTID]=useState("");
  const {id}=useParams();
  const [data,setData]=useState({
    code:id,
    sid:"",
    para:"",
});
const getNotes=async()=>{
  const response=await axios.get("http://localhost:5000/SNotesGet");
  //console.log(response.data)
  setNotes(response.data);
}
const getStudent=async()=>{
  const response=await axios.get("http://localhost:5000/ClassListStudent");
  response.data.map((val)=>{
    if(val.code===id){
      setTID(val.sid);
    }
  })
}
const handleSubmit=async(e)=>{
  //console.log(data)
  await e.preventDefault();
  if(data.para===""){
      notify1();
      return;
  }
      try{
        const response=await axios.post("http://localhost:5000/SNotes",data);
        notify2()
      }
      catch(err){
        console.log(err);
      }
}
const handleDelete=async(code)=>{
  try{
    const response=await axios.delete('http://localhost:5000/DeleteStudentNotes/'+code);
    notify3();
}
catch(err){
    //console.log(err);
}
}
const getPDF=async()=>{
  const response=await axios.get("http://localhost:5000/UNP");
  setAA(response.data);
}
const OPENPDF=(pdfPath)=>{
  window.open("http://localhost:5000/files/"+pdfPath);
}
useEffect(()=>{
  getNotes()
},[handleDelete,handleSubmit]);
useEffect(()=>{
  getStudent();
  getPDF()
},[]);
  return (
    <>
    <ToastContainer/>
    <div className='classroom'>
    <div className='classroom-header'>
    <NavLink to={`/AssignmentUploadStudent/${id}`}>Assignment View</NavLink>
    <NavLink to={`/QuizUploadStudent/${id}`}>Quiz View</NavLink>
    <NavLink to={`/NotesUploadStudent/${id}`}>Notes Section</NavLink>
    <NavLink to={`/StudentClassroom/${TID}`}>RETURN</NavLink>
    </div>
    <div className='uploads'>
    <div className='u1'>
    <form onSubmit={handleSubmit}>
    <label>Enter Notes Name</label>
    <input  type="text" autoComplete='off' placeholder='MAKE NOTES HERE' name='para' onChange={(e)=>{
      //console.log(data)
      setData({
        code:id,
        sid:TID,
        para:e.target.value
      })
    }} value={data.para} ></input>
    <button type='submit'>SAVE</button>
    </form>
    </div>
    <div className='u2'> 
    <div className='snotes'>
    {
      notes.map((val)=>{
        if(val.sid===data.sid && val.code===data.code){
          return(
            <>
            <p>{val.para}</p>
            <button onClick={(e)=>{handleDelete(val._id)}}>DELETE</button>
            </>
          )
        }
      })
    }
    </div>

    </div>
    <div className='D'>
    {
      AA.map((val)=>{
        if( val.code===id){
          return(
            <div className='u3'>
            <h2>{val.name}</h2>
            <button onClick={(e)=>{OPENPDF(val.pdf)}}>VIEW NOTES</button>
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
