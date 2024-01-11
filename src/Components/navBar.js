import React, { useState } from 'react';
import './css/navBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(true);

  function handleNavMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='NavigationBar'>
      <div className='topNavBar' style={!isOpen ? {borderBottom: 'none'}:{borderBottom: '1px solid #dbc5a639'}}>
        <Link to='/' className='topNavBarItems Main'>Madhav.</Link>
        <Link to='/about' className='topNavBarItems'>About</Link>
        <Link to='/services' className='topNavBarItems'>Services</Link>
        <Link to='/projects' className='topNavBarItems'>Projects</Link>
        <Link to='/contact' className='topNavBarItems Main'>Let's Talk</Link>
        <IconButton id="mobile-icon"  onClick={handleNavMenu}>
          {isOpen ? <MenuIcon /> : <ClearIcon />}
        </IconButton>
      </div>

      <div className="shortNavBar" style={isOpen ? {display:'none'} : {display:'flex'}}>
        <Link to='/about' className='topNavBarItems'>About</Link>
        <Link to='/services' className='topNavBarItems'>Services</Link>
        <Link to='/projects' className='topNavBarItems'>Projects</Link>
      </div>
    </div>
  );
}
