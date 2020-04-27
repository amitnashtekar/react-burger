import React, {Component} from 'react';
import Aux from '../../HOC/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import LayoutCls from './Layout.css';
import {connect} from 'react-redux'

class Layout extends Component  {
    state = {
        showSideDrawer: false
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
                <Toolbar isAuth = {this.props.isAuthenticated}
                toggleHandlr = {this.toggleHandlr} />
                <SideDrawer 
                isAuth = {this.props.isAuthenticated}
                showSideDawer = {this.state.showSideDrawer}
                hideSideDrawer ={this.hideSideDrawerHandler}/>
                <main className = {LayoutCls.Content}>
                    {this.props.children}
                </main>
            </Aux>

        ) 
    }
   
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);