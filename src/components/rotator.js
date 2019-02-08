import React from 'react'
import { paths } from './paths'

const Rotator = (props) => {

	const {
		children,
		current
    } = props

    const initial = 0;
    
    const rotation = initial;

	return (
        <div style={{transform: `rotate(${rotation}deg)`}}>
            {children}
        </div>
	)
}

export default Rotator
