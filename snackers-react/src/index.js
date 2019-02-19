// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './App';

// Production Only:
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);

// registerServiceWorker();