import React from 'react';
import CockpitClasses from './Cockpit.css';

const Cockpit = (props) => (
    <div className = {CockpitClasses.Cockpit}>
    <button className = {props.ButtonCls}
     onClick = {props.togglePersons}>state name</button>
    <h1> {props.title}</h1>
    </div>
)

export default Cockpit;