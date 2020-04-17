import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToolbarCls from './Toolbar.css';

const Toolbar = (props) => (
    <div className = {ToolbarCls.Toolbar}>        
        <div>Menu</div>
        <Logo />
        <nav className = {ToolbarCls.DesktopOnly}>
            <NavigationItems />
        </nav>
    </div>
)

export default Toolbar;
