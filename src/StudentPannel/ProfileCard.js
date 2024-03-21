import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import spic from './students.png'
const ProfileCard = () => {
  return (
    <>
    <Header/>
    <div className='view-profile-card'>
    <div className='view-profile-card-1'>
    <img src={spic} alt='STDUENT ACCOUNT'></img>
    <h2 style={{textDecoration:"underline",fontSize:"2rem"}}>PROFILE VIEW</h2>
    <h2 style={{textDecoration:"underline"}}>STUDENT ACCOUNT</h2>
    <h2>NAME</h2>
    <div className='box-1'>
    <h2>NAME</h2>
    </div>
    <h2>EMAIL</h2>
    <div className='box-1'>
    <h2>EMAIL</h2>
    </div>
    <h2>ID</h2>
    <div className='box-1'>
    <h2>ID</h2>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProfileCard
