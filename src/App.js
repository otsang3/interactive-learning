import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './components/Category';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <Home/>
          )}/>
          <Route exact path="/:category" render={(category) => (
            <Category category={category}/>
          )}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
