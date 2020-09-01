import React from 'react';
import background from '../imgs/background.png';
import john from '../imgs/john.jpg'
import sticker from '../imgs/12.png'
import './Header.css';



class Auther__Detail extends React.Component {
    state = {
       discraption: " nec ullamcorper augue sagittis.Prion Faucibus Lorem nisl,Donec commodo leo est,",
       line: "eleifend urna pellentesque eget",
       contact: "Prion scelerisque odio eu nisi viverra,nec ullamcorper gue  "
    }
  render () {  
    return (
      <div>
        <img  className="Content__Background" src={background} alt="background"/>
        <img className="Auther__Img" src={john} alt="john smith"/>
        <img class="Content__Sticker1" src={sticker} alt="Background"/>
        <div className="Auther__Idntity">Hello, i'm
          <span className =" Auther__Idntity--Name"> John</span>
          <span className="Auther__Idntity--Family"> Smith</span>
        </div>
        <div className="Content__Discribtion">{this.state.discraption}
          <div>{this.state.line}
          </div>
        </div>
        <div className="Auther__Contact">{this.state.contact}   
           <a className="ContactInfo__Email"
              href="contactme@mysite.com" 
              target="_blank"> 
                contact me 
            </a>
        </div>
     </div>
    );
  }
}

export default Auther__Detail;