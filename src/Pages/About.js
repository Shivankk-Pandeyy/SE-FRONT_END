import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Page.css'
import logo from './Logo.png'
import tick from './check.png'
import contact from './contact.png'
import online from './online.png'
import giflogo from './logo.gif'
const About = () => {
  return (
    <>
    <Header/>
    <div className='aboutus'>
    <div className='aboutuspic'>
    <img src={online} alt='ONLINE LEARNINGS'>
    </img>
    </div>
    <div className='aboutusinfo'>
    <span>ABOUT US</span>
    <h2>We Help Students & Teachers To Interact And Build A Strong Learning Envirnoment Leading Towards The Growth Of Both Teachers & Students.</h2>
    <p>
    Welcome to <span>STUDYLABS</span>, a cutting-edge platform dedicated to revolutionizing the way we learn and teach. Founded on the principles of innovation and accessibility, we strive to create an online educational space that transcends traditional boundaries.
    </p>
    <div className='tick'>
    <p><img src={tick} alt='VERIFIED LOGO'></img>ONLINE CLASSROOM</p>
    <p><img src={tick} alt='VERIFIED LOGO'></img>ONLINE ASSIGNMENTS</p>
    </div>
    <div className='tick'>
    <p><img src={tick} alt='VERIFIED LOGO'></img>ONLINE QUIZ</p>
    <p><img src={tick} alt='VERIFIED LOGO'></img>ONLINE NOTES</p>
    </div>
    </div>
    </div>
    <div className='about1'>
    <div className='about11'>
    <img src={logo} alt='LOGO'></img>
    <h2>Easy Online Learnings</h2>
    <p>A Complete Online Platform For ClassRooms</p>
    </div>
    <div className='about11'>
    <img src={logo} alt='LOGO'></img>
    <h2>Faculty Services</h2>
    <p>Online Assignments,Quiz,Notes</p>
    </div>
    <div className='about11'>
    <img src={logo} alt='LOGO'></img>
    <h2>Student Services</h2>
    <p>Online Note Making,Quiz,Assignments</p>
    </div>
    </div>
    <div className='contact'>
    <div className='contact-1'>
    <img src={contact} alt='CONTACT CARD'></img>
    </div>
    <div className='contact-2'>
    <img alt="OUR LOGO" src={giflogo}></img>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
