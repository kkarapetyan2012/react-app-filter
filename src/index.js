import React from 'react';
import ReactDOM from 'react-dom';
import Context from '../src/store';
import './index.css';
import App from './App';

ReactDOM.render(<Context><App /></Context>, document.getElementById('root'));
