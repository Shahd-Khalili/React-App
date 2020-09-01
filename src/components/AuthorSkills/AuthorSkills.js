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
                                   {this.state.Photoshop_Percentage}
                             </progress>
                             <div 
                                  className="Photoshop--Percentge"> 
                                  {this.state.Photoshop_Percentage}
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
                                   {this.state.Illustrator_Percentage} 
                              </progress>
                              <div 
                                  className="Illustrator--Percentge"> 
                                  {this.state.Illustrator_Percentage} 
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
                                   {this.state.Html_percentage} 
                              </progress>
                              <div 
                                   className="Html--Percentge"> 
                                   {this.state.Html_percentage} 
                              </div>
                         </div> 
                    </div>
                    <div 
                         className="Content__History">
                         <div 
                              className="History__box">
                              <div 
                                   className="box__Year">
                                   {this.state.First_Period}
                              </div>
                              <div 
                                   className="box__Paragraph">
                                   3r.Graphic Designer
                                   <a 
                                      className="box__Paragraph--Email" 
                                      href="ABC@mysite.com" 
                                      target="_blank">
                                      ABC Inc
                                   </a>
                               </div>
                        </div>
                        <div 
                              className="History__box">
                              <div 
                                   className="box__Year">
                                   {this.state.Second_Period}
                              </div>
                              <div 
                                   className="box__Paragraph">
                                   Graphic specialist
                                   <a 
                                      className="box__Paragraph--Email"
                                      href="contactme@mysite.com" 
                                      target="_blank">
                                      GRAPHICSTUDIO
                                   </a>
                              </div>
                         </div>
                         <div  
                              className="History__box" >
                              <div 
                                   className="box__Year"> 
                                   {this.state.Third_Period}
                              </div>
                              <div 
                                   className="box__Paragraph">
                                   Creativ Director
                                   <a
                                      className="box__Paragraph--Email" 
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
  
  