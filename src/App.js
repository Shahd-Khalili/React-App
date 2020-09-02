//Parent Component
import React from 'react';
import AuthorInformation from './containers/AuthorInformation'
import './App.scss';
import FOlioPage from './containers/FOlioPage';

function App() {
  return (
    <div>
     <AuthorInformation/>
     <FOlioPage/>
    </div>
  );
}

export default App;
