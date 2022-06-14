import React from "react";
import Login from "../Login/Login";
import './Header.css';
import banner from '../images/banner.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className='login-part'>
        <Login></Login>
      </div>
      <div className='banner-part'>
        <img src={banner} style={{width: '100%', height: '100%'}} alt="vector"/>
      </div>
    </div>
  );
};

export default Header;
