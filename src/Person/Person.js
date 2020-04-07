import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I am person ! my name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default Person;