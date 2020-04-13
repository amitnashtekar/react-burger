import React from 'react';
import Aux from '../../HOC/Auxilary';

const Layout = (props) =>  {

    return (
        <Aux>
            <div>Toolbar, SiderDrawer and Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>

    )
}

export default Layout;