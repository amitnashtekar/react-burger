import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = (props) => (

    <ul className = {classes.NavigationItems}>
        <NavigationItem link = "/">Burger Builder</NavigationItem>
        {props.isAuth && <NavigationItem link = "/orders">Orders</NavigationItem>}
        {props.isAuth ? 
        <NavigationItem link = "/logout">logout</NavigationItem>
         : <NavigationItem link = "/auth">Authenticate</NavigationItem>}
    </ul>
)

export default NavigationItems;