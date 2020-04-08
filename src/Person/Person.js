import React from 'react';
import Radium from 'radium';


const Person = (props) => {
    const style = {
        '@media (min-width:500px)': {
            backgroundColor: 'yellow',
            width: '50%'
        }
    }
    return (
        <div style = {style}>
            <p onClick = {props.delete}>I am person ! my name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type = 'text' onChange = {props.change} value = {props.name}></input>
        </div>
        
    )
}

export default Radium(Person);