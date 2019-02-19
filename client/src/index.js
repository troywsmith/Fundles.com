// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './components/App'

// Style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
