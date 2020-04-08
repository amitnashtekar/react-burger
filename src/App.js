import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      {id: 'vhj4', name: 'Amit', age: '32'},
      {id: 'vhj33', name: 'Sai', age: '28'},
      {id: 'vhj754', name: 'Aveer', age: '5'}
    ],
    otherData: 'I am a child ',
    showPerson: false
  }

  togglePersons = () => {
    let showPerson = this.state.showPerson;
    this.setState({showPerson: !showPerson});
  }

  changeNameHandler = (id, event) => {
    console.log(event, id);
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.person[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState( {
      person : persons
    })
  }
  
  deletePersonHandlr = (index) => {
    console.log('index', index);
    const newPersonState = [...this.state.person];
    newPersonState.splice(index, 1);
    this.setState({person: newPersonState});
  }

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.person.map((person, index) => {
              return <Person name = {person.name} age = {person.age}
              delete = {this.deletePersonHandlr.bind(this, index)}
              change = {this.changeNameHandler.bind(this, person.id)}
              key = {person.id} />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
      <button onClick = {this.togglePersons}>state name</button>
      <h1> Hi, I am react App!</h1>
      {persons}

      </div>
    );
  }
}

export default App;
