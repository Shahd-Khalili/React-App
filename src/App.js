//Parent Component
import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav'
import FOlioPage from './containers/FOlioPage';
import AuthorInformation from './containers/AuthorInformation';
import NoMatch from './components/Nomatch'
import './App.scss';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route 
            exact path="/"
            component={FOlioPage}
          />   
          <Route 
            exact path="/About" 
            component={AuthorInformation}
          /> 
          <Route 
            component={NoMatch} 
          /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
