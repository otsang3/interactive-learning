import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryRequest from './components/CategoryRequest';
import Home from './components/Home';
import InteractiveDisplay from './components/InteractiveDisplay';

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
          <Route exact path="/:category/:topic" render={(category) => (
            <InteractiveDisplay category={category}/>
          )}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
