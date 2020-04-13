import React from 'react';
import Aux from '../../HOC/Auxilary';
import LayoutCls from './Layout.css';

const Layout = (props) =>  {

    return (
        <Aux>
            <div>Toolbar, SiderDrawer and Backdrop</div>
            <main className = {LayoutCls.Content}>
                {props.children}
            </main>
        </Aux>

    )
}

export default Layout;