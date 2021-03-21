import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './tests/reportWebVitals';
import App from './comonents/App';
import './styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
