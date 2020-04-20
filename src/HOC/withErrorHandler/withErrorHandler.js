import React, {Component} from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Auxilary';

const WithErrorHandler = (WrappedCmpt, axios) => {
    return class extends Component {
        state = {
            showError: false,
            error: null
        }
        componentWillMount () {
             this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({showError:false, error: null})
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res =>res, error => {
                this.setState({showError: true, error: error})
            });
        }
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor)
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
                    <WrappedCmpt  {...this.props}/>
                </Aux>                
            )
        }
    }
}

export default WithErrorHandler;