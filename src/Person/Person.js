import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p >I am person ! my name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type = 'text' onChange = {props.change} value = {props.name}></input>
        </div>
        
    )
}

export default Person;