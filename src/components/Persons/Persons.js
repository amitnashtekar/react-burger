import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
        return <Person name = {person.name} age = {person.age}
        delete = {props.delete.bind(this, index)}
        change = {props.change.bind(this, person.id)}
        key = {person.id} />
      })
    
export default Persons;