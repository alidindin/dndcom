import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../navbar';
import Home from '../home';
import Portfolio from '../portfolio';

const Index = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
};

export default Index;
