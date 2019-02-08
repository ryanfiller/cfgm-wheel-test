import React from 'react'
import { paths } from './paths'

const Rotator = (props) => {

	const {
		children,
        current,
        steps
    } = props

    console.log('steps[current].title', steps[current].title)
    console.log('steps[current].span', steps[current].span)
    console.log('steps[current].start', steps[current].start)
    console.log('steps[current].middle', steps[current].middle)
    console.log('steps[current].end', steps[current].end)

    const initial = 45
    const arc = 360 / paths.length
    
    const rotation = initial + (-1 * (arc * steps[current].middle))

	return (
        <div className="rotator" style={{transform: `rotate(${rotation}deg)`}}>
            {children}
        </div>
	)
}

export default Rotator
