import React from 'react';
import styles from '../../sass/main.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from '../navbar';
import Banner from '../banner';
import Portfolio from "../portfolio";

const Index = () => {
  return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/" component={Banner} />
            <Route path="/about" component={Banner} />
            <Route path="/portfolio" component={Portfolio} />
          </div>
      </Router>
  );
};

export default Index;
