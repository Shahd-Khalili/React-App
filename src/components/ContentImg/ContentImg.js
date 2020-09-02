import React from 'react';
import wordimg from '../../imgs/Capture1.JPG';
import cupimg from '../../imgs/Capture2.JPG';
import girlimg from '../../imgs/Capture3.JPG';
import tshirtimg from '../../imgs/Capture4.JPG';
import wave from '../../imgs/wave.png';
import smallwave from '../../imgs/5.png';
import sticker3 from '../../imgs/6.png'
import './StyleContentImg.scss';


class ContentImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }

   render() {
        return (
            <div 
                className="FolioImg">
                <div 
                    className="FolioImg__ContentDscription">
                    <img 
                       className="ContentDscription--WordImg"
                       src={wordimg} 
                       alt="WordImg"
                    />
                    <img 
                      className="ContentDscription--CupImg" 
                      src={cupimg} 
                      alt="CupImg"
                    />
                    <img 
                      className="ContentDscription--GirlImg" 
                      src={girlimg}
                      alt="GirlImg"
                    />
                    <img 
                      className="ContentDscription--TshirtImg" 
                      src={tshirtimg}
                      alt="TshirtImg"
                    />
                </div>   
                <img 
                    className="ContentDscription__WaveSticker"
                    src={wave}
                    alt="Sticker" 
                />
                <img  
                    className="ContentDscription__OnewaveSticker" 
                    src={smallwave} 
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