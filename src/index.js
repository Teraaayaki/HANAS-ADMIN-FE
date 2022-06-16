import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyles.css';

import Routes from './routes';
import history from './utils/history';

import reducers from './redux/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <Routes />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
