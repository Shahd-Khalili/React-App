import React from 'react';
import MobileImg from '../../imgs/phone.png';
import './StyleContact.scss';

class ContactInfo extends React.Component {

    constructor(props) {
         super(props);
         this.state = { 
              loading: "L O A D I N G",
              discribtion: "Donec commodo leo est. quis eleifend urna pellentesque ege.Prion scelerisque odio eu nisi viverra,",
              emailDiscription: "nec ullamcorper augue sagittis.Prion Faucibus Lor ",
              email: "contactme@mysite.com",
              facebook: "F A C E B O O K" ,
              twitter: "T W I T T E R",
              dribbble: "D R I B B B L E"
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
                   class="ContactInfo__Load">
                   {loading}
                </div>
                <img 
                   class="ContactInfo__ContactImg " 
                   src={MobileImg} 
                   alt="Mobile Img"
                />
                <div 
                   class="ContactInfo__Mobile">
                   1.800.123.456
                </div>
                <div  
                    class="ContactInfo__EmailParagraph ">
                    {discribtion}
                </div>
                <div 
                    className= "ContactInfo__EmailParagraph"> 
                    {emailDiscription}
                    <a 
                       class="ContactInfo__Email" 
                       href="contactme@mysite.com"
                       target="_blank">
                       {email}
                    </a>
                </div>
                <div 
                    class="ContactInfo__Links">
                    <a 
                      class="Links__Item" 
                      href="facebook.com" 
                      target="_blank">
                      {facebook}
                    </a>
                    <a 
                      class="Links__Item" 
                      href="Twitter.com" 
                      target="_blank">
                      {twitter}
                    </a>
                    <a 
                      class="Links__Item" 
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