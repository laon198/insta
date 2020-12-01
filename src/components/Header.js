import React from 'react';
import instaicon from '../assets/instaicon.png'
import HomeIcon from './instagram/HomeIcon.js'

function Header(){

  return (
    <div className="header">
        <h1 className="title">
            <img src={instaicon} />
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
