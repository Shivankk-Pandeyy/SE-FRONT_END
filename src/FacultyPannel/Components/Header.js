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
            <NavLink to={`/WelcomeFaculty/${id}`}>HomePage</NavLink>
            <NavLink to={`/FacultyClassroom/${id}`}>ClassRoom</NavLink>
            <NavLink to={`/MemberListFaculty/${id}`}>Members</NavLink>
            <NavLink to={`/ProfileFaculty/${id}`}>Profile</NavLink>
            <NavLink to='/LoginPageFaculty'>Logout</NavLink>
        </div>
        <div className='menu'>
          <img src={menu} alt='MENU' onClick={setMenu}></img>
        </div>
        </div>
      )
}

export default Header