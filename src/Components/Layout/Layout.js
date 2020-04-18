import React, {Component} from 'react';
import Aux from '../../HOC/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import LayoutCls from './Layout.css';

class Layout extends Component  {
    state = {
        showSideDrawer: true
    }
    hideSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }
    toggleHandlr = () => {
        this.setState((prevState) => ({
            showSideDrawer : !prevState.showSideDrawer
        }))
    }
    render() {
        return (
            <Aux>
                <Toolbar toggleHandlr = {this.toggleHandlr} />
                <SideDrawer showSideDawer = {this.state.showSideDrawer}
                hideSideDrawer ={this.hideSideDrawerHandler}/>
                <main className = {LayoutCls.Content}>
                    {this.props.children}
                </main>
            </Aux>

        ) 
    }
   
}

export default Layout;