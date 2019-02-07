import React from 'react'

const Info = (props) => {

	const {
		title,
		text,
		color,
		next,
		prev
	} = props


	return (
		<section className="info" style={{backgroundColor: color}}>
			<header>
				<h2>{title}</h2>
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
