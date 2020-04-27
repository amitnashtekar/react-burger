import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenu from '../SideDrawer/ToggleMenu/ToggleMenu';
import ToolbarCls from './Toolbar.css';

const Toolbar = (props) => (
    <div className = {ToolbarCls.Toolbar}>        
        <ToggleMenu toggleHandlr = {props.toggleHandlr} />
        <Logo />
        <nav className = {ToolbarCls.DesktopOnly}>
            <NavigationItems isAuth = {props.isAuth} />
        </nav>
    </div>
)

export default Toolbar;
