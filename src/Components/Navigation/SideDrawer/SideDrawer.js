import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Aux from '../../../HOC/Auxilary';
import BackDrop from '../../UI/Backdrop/Backdrop';
import SDclasses from './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses ;
    if(props.showSideDawer) {
        attachedClasses = [SDclasses.SideDrawer, SDclasses.Open];
    } else {
        attachedClasses = [SDclasses.SideDrawer, SDclasses.Close];
    }
    return (
        <Aux>
            <BackDrop show= {props.showSideDawer} 
            cancelOrder = {props.hideSideDrawer} />
            <div className = {attachedClasses.join(' ')}>
                <Logo height="11%" />
                <NavigationItems isAuth = {props.isAuth}>
                    {/* <NavigationItem>Burger Builder</NavigationItem> */}
                </NavigationItems>

            </div>
        </Aux>
    )
}

export default SideDrawer;