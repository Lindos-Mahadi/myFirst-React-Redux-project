import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/Reducers/index';
//

const store = createStore(rootReducer)
// console.warn("store data", store);

ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>
  ,document.getElementById('root')
);