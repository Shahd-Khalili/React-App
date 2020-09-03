//Child Component #1
import React from 'react';
import Hello from '../components/Hello/Hello';
import ContentImg from '../components/ContentImg/ContentImg';
import ContactInfo from '../components/ContactInfo/ContactInfo';

function FOlioPage() {
  return (
    <div>
        <Hello/>
        <ContentImg/>
        <ContactInfo/>
    </div>
  );
}

export default FOlioPage;

