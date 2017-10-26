import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mantel from './components/Mantel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mantel />, document.getElementById('root'));
registerServiceWorker();
