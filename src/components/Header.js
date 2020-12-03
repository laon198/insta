import React from 'react';
import instaicon from '../assets/instaicon.png'
import HomeIcon from './instagram/HomeIcon.js'
import './Header.scss';

function Header(){

  return (
    <div className="header">
        <h1 className="title">
            <img src={instaicon} alt="인스타아이콘"/>
        </h1>
        <div className="search">
            <input type="text" placeholder="검색"/>
        </div>
        <div className="nav">
            <HomeIcon></HomeIcon>
        </div>
    </div>
  );
}

export default Header ;
