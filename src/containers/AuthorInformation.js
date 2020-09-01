//Child Component #1
import React from 'react';
import Detail from '../components/AuthorDetails/AuthorDetails';
import Skills from '../components/AuthorSkills/AuthorSkills';
import '../components/StylesAuthor.scss';

function AuthorInformation() {
  return (
    <div className="Author">
        <Detail/>
        <Skills/>
    </div>
  );
}
export default AuthorInformation;

