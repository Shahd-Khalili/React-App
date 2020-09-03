import React from 'react';
import './StyleSkills.scss';

class AuthorSkills extends React.Component {

     constructor(props) {
          super(props);
          this.state = { 
               photoshopPercentage: '98%',
               illustratorPercentage: '70%',
               htmlpercentage: '60%',
               firstPeriod: '2000-2008',
               secondPeriod: '2008-2010',
               thirdPeriod: '2010-precent'
          }
     }

    render () { 
         const {
              photoshopPercentage, 
              illustratorPercentage, 
              htmlpercentage, 
              firstPeriod, 
              secondPeriod, 
              thirdPeriod 
          } = this.state;
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
                                   {photoshopPercentage}
                             </progress>
                             <div 
                                  className="Photoshop--Percentge"> 
                                  {photoshopPercentage}
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
                                   {illustratorPercentage} 
                              </progress>
                              <div 
                                  className="Illustrator--Percentge"> 
                                  {illustratorPercentage} 
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
                                   {htmlpercentage} 
                              </progress>
                              <div 
                                   className="Html--Percentge"> 
                                   {htmlpercentage} 
                              </div>
                         </div> 
                    </div>
                    <div 
                         className="Content__History">
                         <div 
                              className="History__Box">
                              <div 
                                   className="Box__Year">
                                   {firstPeriod}
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
                                   {secondPeriod}
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
                                   {thirdPeriod}
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
  
  