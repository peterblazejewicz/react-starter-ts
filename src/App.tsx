import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';

class App extends Component {
  render() {
    return <Hello name="TypeScript" enthusiasmLevel={10} />;
  }
}

export default App;
