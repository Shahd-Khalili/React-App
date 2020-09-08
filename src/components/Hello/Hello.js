import React from 'react';
import background from '../../imgs/backg.png';
import logo from '../../imgs/7.png';
import power from '../../imgs/power.png';
import './StyleHello.scss';

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            discraption: "Donec commodo leo est. quis eleifend urna pellentesque eget.Prion scelerisque odio eu ",
            line: "nisi viverra,nec ullamcorper augue sagittis.Prion Faucibus Lorem nisl,",
        }
    }

    render () { 
        const { discraption, line } = this.state; 
        return (
           <div className="Folio">
               <div 
                   className="FolioImg">
                   <img 
                       className="FolioImg__Logo" 
                       src={logo} 
                       alt="FOLio"
                    />
                   <img 
                       className="FolioImg__Background" 
                        src={background} 
                        alt="Background"
                    />
               </div>
               <div
                   className="Folio__Hello">
                    Hello,
                   <div 
                        className="Folio__Discription" >
                        <img 
                          className="Discription__PowerImg" 
                          src={power} 
                          alt="power"
                        />
                        {discraption}
                        <div>
                            {line}
                        </div>
                   </div>
               </div>
           </div>
        );
    }      
}

export default Hello;
