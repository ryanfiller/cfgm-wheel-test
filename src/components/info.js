import React from 'react'
import { dates } from '../data'

const Info = (props) => {

	const {
		steps,
		next,
		prev,
		current
	} = props

	const {title, text, color} = steps[current]

	const startDate = dates[steps[current].start]
	const endDate = current + 1 < steps.length ? dates[steps[current + 1].start] : dates[steps[0].start]

	return (
		<section className="info" style={{backgroundColor: color}}>
			<div className="arrow" style={{color: color}} />
			<header>
				<h2>{title}</h2>
				<span>{startDate}</span> - <span>{endDate}</span>
			</header>
			<p>
				{text}
			</p>
			<button onClick={prev}>
				Previous
			</button>
			<button onClick={next}>
				Next
			</button>
		</section>
	)
}

export default Info
