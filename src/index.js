import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'


const GlobalStyle = createGlobalStyle`
  body{
    width: 100%;
    height: 100%;
    background: black;
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    word-break:keep-all;
    -webkit-font-smoothing: antialiased;
    h1 {
      font-size: 3.125rem;
    }
    h2 {
      font-size: 1.625rem;
    }
    ul, li {
      list-style: none;
    }
    a{
      text-decoration: none;
    }
  }
  
`
const store = createStore(rootReducer, composeWithDevTools());
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
