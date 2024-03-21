import React , {useState} from 'react'
import './Component.css'
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import menu from './hamburger.png';

const Header = () => {
    const {id}=useParams()
    const [ham,setHam]=useState(false);
    const setMenu=()=>{
        setHam(!ham);
    }
    return (
        <div className={ham?'headers-on':'headers'}>
        <div className='names'>
            <h1>STUDYLABS</h1>
        </div>
        <div className={ham?'linkss-on':'linkss'}>
            <NavLink to={`/WelcomeStudent/${id}`}>HomePage</NavLink>
            <NavLink to={`/StudentClassroom/${id}`}>ClassRoom</NavLink>
            <NavLink to={`/MemberListStudent/${id}`}>Members</NavLink>
            <NavLink to={`/ProfileStudent/${id}`}>Profile</NavLink>
            <NavLink to='/LoginPageStudent'>Logout</NavLink>
        </div>
        <div className='menu'>
          <img src={menu} alt='MENU' onClick={setMenu}></img>
        </div>
        </div>
      )
}

export default Header