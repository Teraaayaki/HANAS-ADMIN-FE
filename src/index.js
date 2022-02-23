import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyles.css';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/admin">
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
