import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import data from './assets/convertcsv.json';
import {addData} from "./actions/actionCreators";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-select/dist/react-select.css';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


store.dispatch(addData(data));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
