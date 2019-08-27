import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducers from '../src/reducers';

const store = createStore(reducers, {});

ReactDom.render(<Provider store= { store } ><App /></Provider>, document.querySelector('#root'));