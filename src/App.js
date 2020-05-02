import React, { useEffect } from 'react';
import Layout from '../src/Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';


import Logout from './Containers/Auth/Logout/Logout';
import {Route, Switch} from 'react-router-dom';
import { authCheckState} from './store/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import AsynComponent from './HOC/asyncComponent/asyncComponent';

const asyncCheckout = AsynComponent(() => {
      return import('./Containers/Checkout/Checkout')
})

const asyncOrder = AsynComponent(() => {
  return import('./Containers/Orders/Orders')
})

const asyncAuth = AsynComponent(() => {
  return import('./Containers/Auth/Auth')
})


const App = (props) => {

  useEffect(() => {
    props.authCheckState();
  }, [])

  
  
    
    return (
      <div>
        <Layout>
          <Switch>
            <Route path = "/checkout" component = {asyncCheckout} />
            <Route path = "/orders" component = {asyncOrder} />
            <Route path = "/auth" component = {asyncAuth} />
            <Route path = "/logout" component = {Logout} />
            <Route path = "/" exact component = {BurgerBuilder} />
            
          </Switch>
        </Layout>
      </div>
    );
  
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
