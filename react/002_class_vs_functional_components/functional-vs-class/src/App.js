import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Users title="Name and ages" />
      </div>
    )
  }
}

export default App;
