import './App.css';
import React, { Component } from 'react';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div> 
        <Counter init={2} max={5}/>
      </div>
    );
  }
}

export default App;