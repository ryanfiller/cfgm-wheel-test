import React from 'react'
import { paths } from './paths'
import { dates } from '../data'

const Group = (props) => { 

    const {
        start,
        end, 
        color
    } = props

    console.log(props)

    const arcs = [];
    
    for (let i = start; i < end; i++) {
        arcs.push(React.cloneElement(paths[i], {key: i, style: {stroke: color}}))
    }

    // deal with rollover in loop
    if (end < start) {
        for (let i = start; i < dates.length; i++) {
            arcs.push(React.cloneElement(paths[i], {key: i, style: {stroke: color}}))
        }

        if (end > 0) {
            for (let i = 0; i < end; i++) {
                arcs.push(React.cloneElement(paths[i], {key: i, style: {stroke: color}}))
            }
        }
    }

    return (
        <g className={'test'}>
            {arcs}
        </g>
    )
 }

const Wheel = (props) => {

    const { steps } = props

    return (
        <div className="wheel">
            <svg version="1.1" id="wheel" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 500" >
                {steps.map( (step, index) => {
                    return (
                        <Group 
                            start={step.start} 
                            end={index + 1 < steps.length ? steps[index + 1].start : steps[0].start}
                            color={step.color}
                            key={index} 
                        />
                    )
                })}
            </svg>
		</div>
    )
}

export default Wheel