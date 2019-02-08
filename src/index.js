import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { steps } from './sample-data'
import formatData from './helpers/format-data'

const formattedData = formatData(steps)

ReactDOM.render(<App steps={formattedData}/>, document.getElementById('root'))