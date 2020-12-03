import React from 'react';
import { FaHome, FaRegPaperPlane, FaRegCompass, FaRegHeart } from "react-icons/fa";
import './HomeIcon.scss';
import profile from '../.././assets/profile.jpg'

function HomeIcon(){

  return (
    <div className="homeicon">
        <div className = "icon1">
            <a href="#">
                <FaHome className="icon"/>
            </a>
        </div>
        <div className = "icon2">
            <a href="#">
                <FaRegPaperPlane className="icon"/>
            </a>
        </div>
        <div className = "icon3">
            <a href="#">
                <FaRegCompass className="icon"/>
            </a>
        </div>
        <div className = "icon4">
            <a href="#">
                <FaRegHeart className="icon"/>
            </a>
        </div>
        <div className = "icon5">
            <a href="#">
                <img className="profile" src={profile} alt="profile"/>
            </a>
        </div>
    </div>
 );
}

export default HomeIcon ;
