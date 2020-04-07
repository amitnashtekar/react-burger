import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = (props) => {
  const [personState,setPersonState] = useState({person: [
    {name: 'Amit', age: '32'},
    {name: 'Sai', age: '28'},
    {name: 'Aveer', age: '5'}
  ]});

  const [otherState,setOtherState] = useState('I am a child');
  
  console.log(personState , otherState);

  const stateNameHandler = () => {
    setPersonState( {
      person : [
        {name: 'Amit Ashtekar', age: '32'},
        {name: 'Sai', age: '28'},
        {name: 'Aveer', age: '6'}
      ]
    })
  }
  
    return (
      <div className="App">
      <button onClick = {stateNameHandler}>state name</button>
      <h1> Hi, I am react App!</h1>
      <Person name = {personState.person[0].name} age = {personState.person[0].age} />
      <Person name = {personState.person[1].name} age = {personState.person[1].age}/>
      <Person name = {personState.person[2].name} age = {personState.person[2].age}> {otherState}</Person>

      </div>
    );

}

export default App;
