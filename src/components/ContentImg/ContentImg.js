import React from 'react';
import wordimg from '../imgs/Capture1.JPG';
import cupimg from '../imgs/Capture2.JPG';
import girlimg from '../imgs/Capture3.JPG';
import tshirtimg from '../imgs/Capture4.JPG';
import sticker from '../imgs/4.png';
import sticker2 from '../imgs/5.png';
import sticker3 from '../imgs/6.png'
class ContentImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }
    
   render() {
        return (
            <div>
                <div 
                    className="Folio__ContentDscription">
                    <img 
                       className="ContentDscription--Imgs"
                       src={wordimg} 
                       alt="WordImg"
                    />
                    <img 
                      className="ContentDscription--Imgs" 
                      src={cupimg} 
                      alt="CupImg"
                    />
                    <img 
                      className="ContentDscription--Imgs" 
                      src={girlimg}
                      alt="GirlImg"
                    />
                    <img 
                      className="ContentDscription--Imgs" 
                      src={tshirtimg}
                      alt="TshirtImg"
                    />
                </div>   
                <img 
                    className="ContentDscription__StickerImg"
                    src={sticker}
                    alt="Sticker" 
                />
                <img  
                    className="ContentDscription__StickerImg" 
                    src={sticker2} 
                    alt="Sticker"
                />
                <img  
                    className="ContentDscription__StickerImg" 
                    src={sticker3} 
                    alt="Sticker"
                />
            </div>
        );
    }
}
export default ContentImg;