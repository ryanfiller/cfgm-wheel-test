import React from 'react'

const Info = (props) => {

	const {
		title,
		text,
		color
	} = props

	return (
		<section className="info" style={{backgroundColor: color}}>
			<header>
				<h2>{title}</h2>
			</header>
			<p>
				{text}
			</p>
		</section>
	)
}

export default Info
