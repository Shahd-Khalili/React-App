//Parent Component
import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import FOlioPage from './containers/FOlioPage';
import AuthorInformation from './containers/AuthorInformation';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Route  exact path="/" component={FOlioPage}/>
        <Route path="/About" component={AuthorInformation}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
