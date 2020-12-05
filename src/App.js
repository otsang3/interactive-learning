import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryRequest from './components/CategoryRequest';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <Home/>
          )}/>
          <Route exact path="/:name" render={(name) => (
            <CategoryRequest name={name}/>
          )}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
