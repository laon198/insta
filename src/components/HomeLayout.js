import React from 'react';

function HomeLayout({children, SideBar}){

  return (
    <div className="wrapper">
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
