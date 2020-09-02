import React from 'react';
import './StyleSkills.scss';

class AuthorSkills extends React.Component {

     constructor(props) {
          super(props);
          this.state = { 
               Photoshop_Percentage: '98%',
               Illustrator_Percentage: '70%',
               Html_percentage: '60%',
               First_Period: '2000-2008',
               Second_Period: '2008-2010',
               Third_Period: '2010-precent'
          }
     }

    render () { 
         const {Photoshop_Percentage, Illustrator_Percentage, Html_percentage, First_Period, Second_Period, Third_Period } = this.state;
          return (
               <div 
                    className="Content">
                    <div 
                         className="Content__Progress">
                         <div className="Content__Progress--Photoshop" >
                              <div 
                                   className="Photoshop--Lable" 
                                   for="file">
                                   PHOTOSHOP
                              </div> 
                              <progress 
                                   id="file" 
                                   value="98"
                                   max="100"> 
                                   {Photoshop_Percentage}
                             </progress>
                             <div 
                                  className="Photoshop--Percentge"> 
                                  {Photoshop_Percentage}
                             </div>
                         </div> 
                         <div 
                              className="Content__Progress--Illustrator">
                              <div className="Illustrator--Lable"
                                   for="file1">
                                   ILLUSTRATOR
                              </div>
                              <progress
                                   id="file1" 
                                   value="70" 
                                   max="100"> 
                                   {Illustrator_Percentage} 
                              </progress>
                              <div 
                                  className="Illustrator--Percentge"> 
                                  {Illustrator_Percentage} 
                              </div>
                         </div>
                         <div 
                              className="Content__Progress--Html">
                              <div 
                                   className="Html--Lable" 
                                   for="file2">
                                   HTML/CSS
                              </div>
                              <progress 
                                  id="file2" 
                                   value="60" 
                                   max="100"> 
                                   {Html_percentage} 
                              </progress>
                              <div 
                                   className="Html--Percentge"> 
                                   {Html_percentage} 
                              </div>
                         </div> 
                    </div>
                    <div 
                         className="Content__History">
                         <div 
                              className="History__Box">
                              <div 
                                   className="Box__Year">
                                   {First_Period}
                              </div>
                              <div 
                                   className="Box__Paragraph">
                                   3r.Graphic Designer
                                   <a 
                                      className="Box__Paragraph--Email" 
                                      href="ABC@mysite.com" 
                                      target="_blank">
                                      ABC Inc
                                   </a>
                               </div>
                        </div>
                        <div 
                              className="History__Box">
                              <div 
                                   className="Box__Year">
                                   {Second_Period}
                              </div>
                              <div 
                                   className="Box__Paragraph">
                                   Graphic specialist
                                   <a 
                                      className="Box__Paragraph--Email"
                                      href="contactme@mysite.com" 
                                      target="_blank">
                                      GRAPHICSTUDIO
                                   </a>
                              </div>
                         </div>
                         <div  
                              className="History__Box" >
                              <div 
                                   className="Box__Year"> 
                                   {Third_Period}
                              </div>
                              <div 
                                   className="Box__Paragraph">
                                   Creativ Director
                                   <a
                                      className="Box__Paragraph--Email" 
                                      href="contactme@mysite.com" 
                                      target="_blank"> 
                                      DESIGN ARTS
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          );
     }
}

export default AuthorSkills ;
  
  