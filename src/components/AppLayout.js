import React from 'react';
import "./AppLayout.scss";
import Header from './Header';

function AppLayout({children}){

  return (
    <div className="app">
        <div id="header">
            <div className="container">
                <Header>
                    
                </Header>
            </div>
        </div>
        <div id="contents">
            <div className="container">
                {children}
            </div>
        </div>
        <div id="footer">
            <div className="container">
                <div className="footer">
                    dsfdf
                </div>
            </div>
        </div>
    </div>);
}

export default AppLayout ;
