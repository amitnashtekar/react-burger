import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import SDclasses from './SideDrawer.css';

const SideDrawer = (props) => {

    return (
        <div className = {SDclasses.SideDrawer}>
            <Logo height="11%" />
            <NavigationItems>
                <NavigationItem>Burger Builder</NavigationItem>
            </NavigationItems>

        </div>
    )
}

export default SideDrawer;