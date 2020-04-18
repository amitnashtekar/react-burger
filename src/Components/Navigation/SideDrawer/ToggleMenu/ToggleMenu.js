import React from 'react';
import TMClasses from './ToggleMenu.css'

const ToggleMenu = (props) => (
    <div className = {TMClasses.DrawerToggle} onClick = {props.toggleHandlr}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default ToggleMenu;