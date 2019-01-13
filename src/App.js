import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
       <div className="first">
         <Hello world="World" />
       </div>
    );
  }
}

function Hello (prop) {
    return (
     <h1>Hello {prop.world}</h1>
  )
}

export default App;
