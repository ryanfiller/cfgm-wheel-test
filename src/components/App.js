import React, { useState } from 'react'
import '../styles/styles.scss'

import Info from './info'
import Rotator from './rotator'
import Wheel from './wheel'

const App = (props) => {

	const {
		steps
	} = props

	const [current, setCurrent] = useState(0)

	return (
		<section className="container">
			<Info steps={steps} current={current} setCurrent={setCurrent} />
			<Rotator steps={steps} current={current}>
				<Wheel steps={steps} current={current} setCurrent={setCurrent} />
			</Rotator>
		</section>
	)
}

export default App
