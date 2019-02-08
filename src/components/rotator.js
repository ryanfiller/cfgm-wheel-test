import React from 'react'

const Rotator = (props) => {

	const {
        rotation,
		children
    } = props

	return (
        <div className="rotator" style={{transform: `rotate(${rotation}deg)`}}>
            {children}
        </div>
	)
}

export default Rotator
