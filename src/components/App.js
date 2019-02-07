import React, { useState } from 'react'
import '../styles/styles.scss'

import { steps } from '../data.js'

import Info from './info'
import Wheel from './wheel'

const App = (props) => {

	const [current, setCurrent] = useState(0)

	const next = () => {

	}

	const prev = () => {
		
	}

	return (
		<section className="container">
			<Info {...steps[current]} />
			<Wheel steps={steps} current={current} />
		</section>
	)
}

export default App
