import React, { useState } from 'react'
import '../styles/styles.scss'

import { paths } from './paths'
import Info from './info'
import Rotator from './rotator'
import Wheel from './wheel'

const App = (props) => {

	const {
		steps
	} = props

	const arc = 360 / paths.length
	const arcOffset = 45

	const [current, setCurrent] = useState(0)
	const [rotation, setRotation] = useState(-1 * (arc * steps[0].middle) + arcOffset)

	const setNext = () => {
		if(current + 1 <= steps.length - 1) {
			setCurrent(current + 1)
			setRotation(rotation - (arc * (steps[current].middle + steps[current + 1].middle)))
		} else {
			setCurrent(0)
			setRotation(rotation - (arc * (steps[steps.length - 1].middle + steps[1].middle)))
		}
	}

	const setPrev = () => {
		if(current - 1 >= 0) {
			setCurrent(current - 1)
			setRotation(rotation + (arc * (steps[current].middle + steps[current - 1].middle)))
		} else {
			setCurrent(steps.length - 1)
			setRotation(rotation + (arc * (steps[current].middle + steps[0].middle)))
		}
	}

	const setThis = (index) => {
		setCurrent(index)
		setRotation(-1 * (arc * steps[index].middle) + arcOffset)
	}

	return (
		<section className="container">
			<Info steps={steps} current={current} setNext={setNext} setPrev={setPrev} />
			<Rotator steps={steps} current={current} rotation={rotation}>
				<Wheel steps={steps} current={current} setThis={setThis} />
			</Rotator>
		</section>
	)
}

export default App
