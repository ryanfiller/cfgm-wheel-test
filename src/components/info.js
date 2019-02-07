import React from 'react'
import { dates } from '../data'

const Info = (props) => {

	const {
		title,
		text,
		color,
		next,
		prev,
		current
	} = props

	const startDate = dates[current]
	const endDate = dates[current + 1]

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
