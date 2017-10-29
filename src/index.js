import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Quoted from './components/Quoted';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Quoted />
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
