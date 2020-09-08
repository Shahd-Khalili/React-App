import React from 'react';
import './NavStyle.scss';

const Nav = () =>{
    return (
        <div 
            className="Navbar">
            <div 
                className="Navbar__Continer">
                <a 
                  href="#F" 
                  className="Continer__Logo">
                  FOlio
                </a>
                <ul>
                    <a 
                      href="/">
                      Home
                    </a>
                    <a 
                      href="/About">
                      About
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Nav;