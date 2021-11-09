import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store";
import {Router, browserHistory} from 'react-router'
import routes from './routes'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
