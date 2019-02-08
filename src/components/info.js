import React from 'react'
import { dates } from '../dates'

const Info = (props) => {

	const {
		steps,
		current,
		setNext,
		setPrev,
	} = props

	const {title, text, color} = steps[current]

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
			<button onClick={setPrev}>
				Previous
			</button>
			<button onClick={setNext}>
				Next
			</button>
		</section>
	)
}

export default Info
