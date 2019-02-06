import React from 'react'
import { paths } from './paths'

const Group = (props) => { 

    const {start, end} = props

    const arcs = [];

    for (let i = start; i <= end; i++) {
        arcs.push(paths[i])
    }

    console.log(arcs)

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
                        <Group {...step} key={index} />
                    )
                })}
            </svg>
		</div>
    )
}

export default Wheel