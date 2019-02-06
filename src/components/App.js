import React, { Component } from 'react';
import '../styles/styles.scss';

import Wheel from './wheel';

const App = (props) => {
  return (
    <Wheel {...props} />
  )
}

export default App;
