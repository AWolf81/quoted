import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Quoted from './components/Quoted';
import registerServiceWorker from './registerServiceWorker';

// import store from './store';
import reducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';


// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
)

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Quoted />
		</Provider>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
