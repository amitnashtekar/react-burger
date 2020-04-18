import React, {Component} from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Auxilary';

const WithErrorHandler = (WrappedCmpt, axios) => {
    return class extends Component {
        state = {
            showError: false,
            error: null
        }
        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({showError:false, error: null})
            });
            axios.interceptors.response.use(res =>res, error => {
                this.setState({showError: true, error: error})
            });
        }
        closeModal = () => {
            this.setState({showError: false, error: null})
        }
        render() {
            return(
                <Aux>
                    {this.state.showError && <Modal show = {this.state.showError}
                    cancelOrder = {this.closeModal} >
                        {this.state.error.message}
                    </Modal>}
                    <WrappedCmpt />
                </Aux>                
            )
        }
    }
}

export default WithErrorHandler;