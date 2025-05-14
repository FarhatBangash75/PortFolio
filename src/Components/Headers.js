import React from 'react';
import './Headers.css';
import { useNavigate } from 'react-router-dom';

function Headers() {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }

  return (
   <div>
    <div className="Headers-Dev">
   
      <ul >
        <li onClick={() => handleNavigation('/')} >Home </li>
        <li onClick={() => handleNavigation('/About')}>About</li>
        <li onClick={() => handleNavigation('/Skills')}>Skills</li>
        <li onClick={() => handleNavigation('/Project')}>Projects</li>
        <li onClick={() => handleNavigation('/Contacts')}className='cont-d' >Contacts</li>
      </ul>
        </div>

        <div ></div>
      </div>
     

  
    
  );
}

export default Headers;
