import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import { fetchUser } from './redux/actions/users'


let newStore = store()

newStore.dispatch(fetchUser())

ReactDOM.render(
  <Provider store={newStore} >
     <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
