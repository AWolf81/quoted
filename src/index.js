import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Mantel from './components/Mantel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Mantel />
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
