import React, { Component } from 'react';
import Layout from '../src/Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    
    return (
      <div>
        <Layout>
          <Switch>
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/orders" component = {Orders} />
            <Route path = "/" exact component = {BurgerBuilder} />
            
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
