import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { steps } from './sample-data'
import formatData from './helpers/format-data'

const formattedData = formatData(steps)

console.log('formattedData', formattedData)

ReactDOM.render(<App steps={formattedData}/>, document.getElementById('root'))