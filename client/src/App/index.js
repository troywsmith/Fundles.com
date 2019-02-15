import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

class App extends Component {
 
  render() {

    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );

  }
}


export default App;