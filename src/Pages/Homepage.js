import React from 'react'
import './Page.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import hp2 from './homepage2.png'
import hp1 from './hp1.gif'
import logo from './Logo.png'
const Homepage = () => {
  return (
    <>
    <Header/>
    <div className='home-page'>
    <div className='hp-1'>
    <p>Welcome To <span>STUDYLABS</span></p>
    <p>Discover the Future Of Learning in</p>
    <p>Dynamic Virtual Classroom</p>
    <img alt='LOGO' src={logo}></img>
    <p></p>
    </div>
    <div className='hp-2'>
    <img alt='STUDYLABS FACILITIES' src={hp1}></img>
    </div>
    </div>
    <div className='hp-3'>
    <div className='hp-31'>
    <img src={hp2} alt="STUDENT'S STUDY"></img>
    </div>
    <div className='hp-32'>
    <h2>Let's Make Learning Fun</h2>
    <div className='hp-322'>
    <div className='hp-3222'>
    <p>Online Assignments</p>
    </div>
    <div className='hp-3222'>
    <p>Online Quiz</p>
    </div>
    </div>
    <div className='hp-322'>
    <div className='hp-3222'>
    <p>Online Classes</p>
    </div>
    <div className='hp-3222'>
    <p>Online Notes</p>
    </div>
    </div>
    <div className='hp-322'>
    <div className='hp-3222'>
    <p>Study Anywhere</p>
    </div>
    <div className='hp-3222'>
    <p>Study Anytime</p>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Homepage
