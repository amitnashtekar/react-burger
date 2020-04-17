import React from 'react';
import Aux from '../../HOC/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import LayoutCls from './Layout.css';

const Layout = (props) =>  {

    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <main className = {LayoutCls.Content}>
                {props.children}
            </main>
        </Aux>

    )
}

export default Layout;