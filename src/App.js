import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      {name: 'Amit', age: '32'},
      {name: 'Sai', age: '28'},
      {name: 'Aveer', age: '5'}
    ],
    otherData: 'I am a child '
  }

  stateNameHandler = () => {
    this.setState( {
      person : [
        {name: 'Amit Ashtekar', age: '32'},
        {name: 'Sai', age: '28'},
        {name: 'Aveer', age: '6'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
      <button onClick = {this.stateNameHandler}>state name</button>
      <h1> Hi, I am react App!</h1>
      <Person name = {this.state.person[0].name} age = {this.state.person[0].age} />
      <Person name = {this.state.person[1].name} age = {this.state.person[1].age}/>
      <Person name = {this.state.person[2].name} age = {this.state.person[2].age}> {this.state.otherData}</Person>

      </div>
    );
  }
}

export default App;
