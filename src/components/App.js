import React, { Component } from 'react';
import '../styles/styles.scss';

import Wheel from './wheel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wheel />
        </header>
      </div>
    );
  }
}

export default App;
