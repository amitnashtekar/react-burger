import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import reducer from '../src/store/reducer';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';


const logger = store => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE] dispatching action',action);
            const result = next(action);
            console.log('[MIDDLEWARE] next state', store.getState());
            return result;
        }
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(logger)));

const app = (
    <Provider store = {store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
