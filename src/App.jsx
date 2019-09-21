import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import Index from './components/Index/index';
import './sass/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Index />;
  }
}

export default hot(App);
