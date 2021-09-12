import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body{
    background: black;
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
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
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
