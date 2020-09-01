import React from 'react';
import backgroundd from '../../imgs/backg.png';
import john from '../../imgs/johns.jpg';
import sticker from '../../imgs/sticker.png';
import power from '../../imgs/power.png';
import wave from '../../imgs/wave.png';
import './StyleDetails.scss';

class AuthorDetails extends React.Component {
     
     constructor(props) {
          super(props);
          this.state = {
               discraption: " nec ullamcorper augue sagittis.Prion Faucibus Lorem nisl,Donec commodo leo est,",
               line: "eleifend urna pellentesque eget",
               contact: "Prion scelerisque odio eu nisi viverra,nec ullamcorper gue  ",
               hello: "Hello, i'm",
               firstname: " John",
               lastname: " Smith"
          }
     }

    render () {  
          return (
               <div className="AuthorDetails">
                    <img  
                         className="AuthorDetails__Background" 
                         src={backgroundd} 
                         alt="background"
                    />
                    <img  
                         className="AuthorDetails__UserImg"
                         src={john} 
                         alt="john smith"
                    />
                    <img 
                         className="AuthorDetails__Sticker1" 
                         src={sticker} 
                         alt="Background"
                    />
                    <img 
                         className="AuthorDetails__StickerPower"
                         src={power}
                         alt="Background"
                    />
                    <img  
                         className="AuthorDetails__StickerWaves" 
                         src={wave} 
                         alt="Background"
                    />
                    <div  
                         className="AuthorDetails__Idntity">
                         {this.state.hello}
                         <span
                              className =" AuthorDetails__Idntity--Name">
                              {this.state.firstname}
                         </span>
                         <span
                              className="AuthorDetails__Idntity--Family"> 
                              {this.state.lastname}
                         </span>
                    </div>
                    <div  
                         className="AuthorDetails__Discribtion">
                         {this.state.discraption}
                         <div>
                           {this.state.line}
                         </div>
                    </div>
                    <div  
                         className="AuthorDetails__Contact">
                         {this.state.contact}   
                         <a   
                             className="Contact__Email"
                             href="contactme@mysite.com" 
                             target="_blank"> 
                             contact me 
                         </a>
                    </div>
               </div>
          );
     }
}
export default AuthorDetails;