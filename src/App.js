import React, { Component } from 'react';
import Layout from '../src/Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';
import {Route, Switch} from 'react-router-dom';
import { authCheckState} from './store/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


class App extends Component {

  componentDidMount () {
    this.props.authCheckState();
  }
  render() {
    
    return (
      <div>
        <Layout>
          <Switch>
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/orders" component = {Orders} />
            <Route path = "/auth" component = {Auth} />
            <Route path = "/logout" component = {Logout} />
            <Route path = "/" exact component = {BurgerBuilder} />
            
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
