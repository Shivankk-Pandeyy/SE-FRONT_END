import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './Welcome.css'
import welcome from './welcome.gif'
import logo from './logo.png'
const Welcome = () => {
  return (
    <>
    <Header/>
    <div className='welcome-faculty'>
      <div className='wf-1'>
      <h2>FACULTY PANEL</h2>
      <h2>Welcome To <span>STUDYLABS</span></h2>
      <h2 style={{fontFamily:"cursive"}}>Emopowering Educators For Success</h2>
      <img src={logo} alt='STUDYLABS LOGO'></img>
      </div>
      <div className='wf-2'>
      <img src={welcome} alt='OUR SERVICES'></img>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Welcome
