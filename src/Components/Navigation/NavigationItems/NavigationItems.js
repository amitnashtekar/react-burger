import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = (props) => (

    <ul className = {classes.NavigationItems}>
        <NavigationItem link = "/">Burger Builder</NavigationItem>
        <NavigationItem link = "/">Chckout</NavigationItem>
    </ul>
)

export default NavigationItems;