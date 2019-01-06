import React, { Component } from 'react';
// import axios from 'axios';
import DrawCardBtn from './components/DrawCardBtn';
import CardPile from './components/CardPile';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrawCardBtn />
        <CardPile />
      </div>
    );
  }
}

export default App;
