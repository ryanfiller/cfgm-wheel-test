import React from 'react'
import Months from './months'

import { paths } from './paths'
import { dates } from '../dates'

const Group = (props) => { 

    const {
        start,
        end, 
        color,
        onClick,
        className
    } = props

    const arcs = [];

    const pushArc = (i) => {
        arcs.push(React.cloneElement(paths[i], {
            key: i, 
            style: {stroke: color}
        }))
    }
    
    for (let i = start; i < end; i++) {
        pushArc(i)
    }

    // deal with rollover in loop
    if (end < start) {
        for (let i = start; i < dates.length; i++) {
            pushArc(i)
        }

        if (end > 0) {
            for (let i = 0; i < end; i++) {
                pushArc(i)
            }
        }
    }

    return (
        <g className={className} onClick={onClick}>
            {arcs}
        </g>
    )
 }

const Wheel = (props) => {

    const { 
        steps,
        current,
        setThis
    } = props

    return (
        <div className="wheel">
            <svg version="1.1" id="wheel" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 400 400" >
                {steps.map( (step, index) => {
                    return (
                        <Group 
                            start={step.start} 
                            end={step.end}
                            color={step.color}
                            key={index}
                            onClick={() => setThis(index)}
                            className={ current === index ? 'range current' : 'range'}
                        />
                    )
                })}
                <circle className="mask" cx="200" cy="200" r="200"/>
                <Months />
            </svg>
		</div>
    )
}

export default Wheel