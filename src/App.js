import React, { Component } from 'react';
import Chat from './components/Chat';
import './App.css';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div id="app-wrap">
        <Chat />
      </div>
    );
  }
}

export default App;
