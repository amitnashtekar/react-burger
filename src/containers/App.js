import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';


class App extends Component {
  state = {
    person: [
      {id: 'vhj4', name: 'Amit', age: '32'},
      {id: 'vhj33', name: 'Sai', age: '28'},
      {id: 'vhj754', name: 'Aveer', age: '5'}
    ],
    otherData: 'I am a child ',
    title: 'Hi, I am react App!',
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
    console.log('classes', classes);
    
    let persons = null;
    if (this.state.showPerson) {
      persons = (        
        <Persons persons = {this.state.person}
                delete = {this.deletePersonHandlr}
                change = {this.changeNameHandler}
                 />
      )
      
    }
    return (
      <div className = {classes.App}>
        <Cockpit ButtonCls = {classes.Button}
        title = {this.state.title}
        togglePersons = {this.togglePersons}
         />
     
      {persons}

      </div>
    );
  }
}

export default App;
