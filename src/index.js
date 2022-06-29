import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './Titles'
import Buttons from './Buttons'
import Info from './info'
import './style.css'

const els = (
  <div className="root">
    <img src="../assets/client-1.jpg" alt="my image"  />
    <Titles />
    <Buttons />
    <Info />
  </div>
)

ReactDOM.render(
    els, 
  document.getElementById('root')
);