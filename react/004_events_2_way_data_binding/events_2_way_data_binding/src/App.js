import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    name: 'Baljeet'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameViaInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={() => this.changeName()}>Change Name anon func</button>
        <button onClick={this.changeName.bind(this, 'Anita')}>Change Name bind func</button>
        <input type="text" onChange={this.changeNameViaInput.bind(this)} value={this.state.name}></input>
      </div>
    );
  }
}

export default App;
