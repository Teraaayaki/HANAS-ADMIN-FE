import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { Router } from 'react-router-dom';
import storage from 'redux-persist/lib/storage'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyles.css';

import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react'
import history from './utils/history';

import reducers from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)), );


let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
          <Router history={history}>
              <Routes />
          </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
