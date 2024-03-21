import React , {useState} from 'react'
import './Component.css'
import {NavLink} from 'react-router-dom';
import menu from './hamburger.png';

const Header = () => {
    const [ham,setHam]=useState(false);
    const setMenu=()=>{
        setHam(!ham);
    }
    return (
        <div className={ham?'header-on':'header'}>
        <div className='name'>
            <h1>STUDYLABS</h1>
        </div>
        <div className={ham?'links-on':'links'}>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/About'>ABOUT</NavLink>
            <NavLink to='/LoginPage'>LOGIN</NavLink>
            <NavLink to='/SignupPage'>SIGNUP</NavLink>
        </div>
        <div className='menu'>
          <img src={menu} alt='MENU' onClick={setMenu}></img>
        </div>
        </div>
      )
}

export default Header