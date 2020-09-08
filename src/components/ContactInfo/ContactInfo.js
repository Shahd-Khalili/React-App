import React from 'react';
import MobileImg from '../../imgs/phone.png';
import './StyleContact.scss';

class ContactInfo extends React.Component {

    constructor(props) {
         super(props);
         this.state = { 
              loading: "LOADING",
              discribtion: "Donec commodo leo est. quis eleifend urna pellentesque ege.Prion scelerisque odio eu nisi viverra,",
              emailDiscription: "nec ullamcorper augue sagittis.Prion Faucibus Lor ",
              email: "contactme@mysite.com",
              facebook: "FACEBOOK" ,
              twitter: "TWITTER",
              dribbble: "DRIBBBLE"
            }
    }

   render () { 
        const {
            loading,
            discribtion, 
            emailDiscription, 
            email,
            facebook,
            twitter,
            dribbble 
        } = this.state;
         return (
            <div className="ContactInfo">
                <div 
                   className="ContactInfo__Load">
                   {loading}
                </div>
                <img 
                   className="ContactInfo__ContactImg " 
                   src={MobileImg} 
                   alt="Mobile Img"
                />
                <div 
                   className="ContactInfo__Mobile">
                   1.800.123.456
                </div>
                <div  
                    className="ContactInfo__EmailParagraph ">
                    {discribtion}
                </div>
                <div 
                    className= "ContactInfo__EmailParagraph"> 
                    {emailDiscription}
                    <a 
                       className="ContactInfo__Email" 
                       href="contactme@mysite.com"
                       target="_blank">
                       {email}
                    </a>
                </div>
                <div 
                    className="ContactInfo__Links">
                    <a 
                      className="Links__Item" 
                      href="facebook.com" 
                      target="_blank">
                      {facebook}
                    </a>
                    <a 
                      className="Links__Item" 
                      href="Twitter.com" 
                      target="_blank">
                      {twitter}
                    </a>
                    <a 
                      className="Links__Item" 
                      href="DRIBBBLE.com" 
                      target="_blank">
                      {dribbble}
                    </a>
                </div> 

            </div>
        );
    }
}

export default ContactInfo;