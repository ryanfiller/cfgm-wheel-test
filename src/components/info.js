import React from 'react'
import { dates } from '../dates'

const Info = (props) => {

	const {
		steps,
		current,
		setCurrent
	} = props

	const {title, text, color} = steps[current]

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

	const startDate = dates[steps[current].start]
	const endDate = dates[steps[current].end]

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
