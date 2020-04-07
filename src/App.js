import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hi, I am react App!</h1>
      <Person name = "Amit" age = "32" />
      <Person name = "Sai" age = "28"/>
      <Person name = "Aveer" age = "5"> I am a child </Person>

      </div>
    );
  }
}

export default App;
