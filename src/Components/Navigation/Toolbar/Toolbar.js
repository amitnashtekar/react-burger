import React from 'react';
import Logo from '../../Logo/Logo';
import ToolbarCls from './Toolbar.css';

const Toolbar = (props) => (
    <div className = {ToolbarCls.Toolbar}>        
        <div>Menu</div>
        <Logo />
        <nav>
            ...
        </nav>
    </div>
)

export default Toolbar;
