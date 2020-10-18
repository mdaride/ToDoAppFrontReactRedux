//Este é o único arquivo que interage com a DOM
import React from 'react'
import ReactDOM from 'react-dom'
//import * as serviceWorker from './serviceWorker'
import { applyMiddleware, createStore } from 'redux'

import { Provider } from 'react-redux'
//import multi from 'redux-multi'

import promise from 'redux-promise'

import App from './main/App'
import reducers from './main/reducers'
import './index.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
//applyMiddleware(promisse) retorna um método X
//Para o método X é passado createStore como parâmetro
//A chamada de applyMiddleware(promise)(createStore), ou seja, X(createStore), retorna uma função Y
//Para a função Y é passado (reducers, devTools) como parâmetro
const store = applyMiddleware(promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
