import React , {Component} from 'react';
import Order from '../../Components/Order/Order';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import {connect} from 'react-redux';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/order.json?auth=' + this.props.token)
            .then(res => {
                let orders = res.data;
                const fetchedOrders = [];
                for(let key in orders) {
                    fetchedOrders.push({
                        ...orders[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }
    render() {
        return(
            <div>
                {
                    this.state.orders.map(order =>
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={+order.price}
                        />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}



export default connect(mapStateToProps,null)(withErrorHandler(Orders, axios));