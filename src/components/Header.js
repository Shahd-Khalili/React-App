//Child Component #1
import React from 'react';
import background from '../imgs/background.png';
import john from '../imgs/john.jpg'
import './Header.css';

function Header() {
  return (
    <div className="Header__App">
      <div className="Auther__Content">
        <img  className="Content__Background" src={background} alt="background"/>
        <img className="Auther__Img" src={john} alt="john smith" ></img>
        <div className="Auther__Idntity">Hello, i'm
          <span className =" Auther__Idntity--Name"> John</span>
          <span className="Auther__Idntity--Family"> Smith</span>
        </div>
        <div className="Content__Discribtion">nec ullamcorper augue sagittis.Prion Faucibus Lorem nisl,Donec commodo leo est,
          <div>eleifend urna pellentesque eget
          </div>
        </div>
        <div className="Auther__Contact">Prion scelerisque odio eu nisi viverra,nec ullamcorper gue 
          <a className="ContactInfo__Email" href="contactme@mysite.com" target="_blank"> contact me</a>
        </div>
        <div className="Content__Progress">
          <div className="Content__Progress--Photoshop" >
            <div className="Photoshop--Lable" for="file">PHOTOSHOP</div> 
            <progress  id="file" value="98" max="100"> 98% </progress>
            <div className="Photoshop--Percentge" > 98%</div>
          </div> 
            <div className="Content__Progress--Illustrator" >
            <div className="Illustrator--Lable"  for="file1">ILLUSTRATOR</div>
            <progress id="file1" value="70" max="100"> 70% </progress>
            <div className="Illustrator--Percentge" >70%</div>
          </div>
          <div className="Content__Progress--Html" >
            <div className="Html--Lable" for="file2">HTML/CSS</div>
            <progress id="file2" value="60" max="100"> 60% </progress>
            <div className="Html--Percentge">60%</div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Header;
