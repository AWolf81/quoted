import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Quoted from './components/Quoted';
// import store from './store';
import reducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log('This is the store: ' + store)


ReactDOM.render(
	<BrowserRouter>
{/*		<Provider store={store}> 	*/}
			<Quoted />
{/*		</Provider>					*/}
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
