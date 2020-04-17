import React from 'react';
import logoImg from '../../Assets/Images/Logo/original.png';
import LogoCls from './Logo.css';

const Logo = (props) => (
    <div className = {LogoCls.Logo}>
        <img src = {logoImg} alt="burger logo" />
    </div>
)

export default Logo;