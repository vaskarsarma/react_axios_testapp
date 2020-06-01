import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename='/posts'> //Using basename for base route handling
      <BrowserRouter basename='/posts'>
        <div className='App'>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
