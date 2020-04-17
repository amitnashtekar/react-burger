import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => (
    <li className = {classes.NavigationItem}>
        <a link = {props.link}>{props.children}</a>
    </li>
)

export default NavigationItem;