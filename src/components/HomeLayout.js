import React from 'react';
import './HomeLayout.scss';

function HomeLayout({children, SideBar}){

  return (
    <div className="contents">
      <div className="PostList">
          {children}
      </div>
      <div className="SideBar">
          {SideBar}
      </div>
    </div>
    );
}

export default HomeLayout ;
