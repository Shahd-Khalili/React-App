//Child Component #1
import React from 'react';
import '../components//Header.css';
import Auther__Detail from '../components/Auther__Details'
import Auther__Skills from '../components/Auther__Skills'

function Header() {
  return (
    <div className="Auther__Information">
      <div className="Auther__Content">
        <Auther__Detail/>
        <Auther__Skills/>
      </div>
    </div>
  );
}
export default Header;

