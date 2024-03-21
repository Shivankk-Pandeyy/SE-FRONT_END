import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Page.css'
import teacher from './training.png'
import student from './students.png'
const SignupPage = () => {
  return (
    <>
    <Header/>
    <div className='signup'>
    <div className='signup-1'>
    <h2>Faculty Login </h2>
    <img src={teacher} alt='FACULTY' className='teacherlogo'></img>
    <ul>
    <li>ClassRoom Setup</li>
    <li>Assignment Setup</li>
    <li>Quiz Setup</li>
    <li>Marks Upload</li>
    <li>Notes Upload</li>
    </ul>
    <NavLink style={{width:"100%"}} to='/LoginPageFaculty'><button>LOGIN</button></NavLink>
    </div>
    <div className='signup-1'>
    <h2>Student Login </h2>
    <img src={student} alt='STUDENTS LOGO' className='studentlogo'></img>
    <ul>
    <li>Join ClassRoom</li>
    <li>Submit Assignment</li>
    <li>Submit Quiz</li>
    <li>View Marks</li>
    <li>Notes Making</li>
    </ul>
    <NavLink style={{width:"100%"}} to='/LoginPageStudent'><button>LOGIN</button></NavLink>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignupPage
