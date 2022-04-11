import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/ConfigStore";
import {history} from "./redux/ConfigStore";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
