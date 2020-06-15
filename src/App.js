// require('dotenv').config()

import React, { Component } from 'react';
import Routes from './routes';

import Header from './components/Header';
import Main from './pages/main';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header></Header>
        <Routes></Routes>
      </>
    );
  }
}

export default App;
