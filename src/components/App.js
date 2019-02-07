import React, { useState } from 'react'
import '../styles/styles.scss'

import { steps } from '../data.js'

import Info from './info'
import Wheel from './wheel'

const App = () => {

	const [current, setCurrent] = useState(0)

	const next = () => {
		if(current + 1 <= steps.length - 1) {
			setCurrent(current + 1)
		} else {
			setCurrent(0)
		}
	}

	const prev = () => {
		if(current - 1 >= 0) {
			setCurrent(current - 1)
		} else {
			setCurrent(steps.length - 1)
		}
	}

	return (
		<section className="container">
			<Info {...steps[current]} current={current} next={next} prev={prev} />
			<Wheel steps={steps} current={current} setCurrent={setCurrent} />
		</section>
	)
}

export default App
