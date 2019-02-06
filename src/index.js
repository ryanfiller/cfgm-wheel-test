import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { steps } from './data.js'

ReactDOM.render(<App steps={steps} />, document.getElementById('root'));