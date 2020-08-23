import React, { useCallback, useState } from 'react'
import {Experience, Experiences} from '../models'
import clsx from 'clsx'
import './TimelineBar.css'

export interface Props {
    experinces: Experiences;
    selectedExp: Experience;
    onSelect: (exp: Experience) => void;
}

const keyPrefix = Math.random() + ''

const TimelineBar = ({experinces, selectedExp, onSelect}: Props) => {
    const [hovExp, setHovExp] = useState<Experience | null>(null)
    const getColor = useCallback((i: number, l: number) => {
        return `rgb(255, ${(l - i) / l * 255}, ${(l - i) / l * 255})`
    }, [])

    return (
        <div className='time-line-bar-container'>
            {
                experinces.experiences.map((experince, i) => {
                    const _height = experince.duration / experinces.sumOfDuration * 600
                    const height = (_height < 70 ? 70 : _height)
                    const color = getColor(i + 1, experinces.experiences.length)
                    return (
                        <div
                        className={clsx('time-line-bar-item', {active: experince === selectedExp})}
                        key={keyPrefix + i}
                        onMouseOver={() => setHovExp(experince)}
                        onMouseLeave={() => setHovExp(null)}
                        onClick={() => experince === selectedExp || onSelect(experince)}
                        style={{height, backgroundColor: color}}>
                            <div
                            className={clsx('time-line-tooltip', {hidden: hovExp !== experince || selectedExp === experince})}
                            style={{backgroundColor: color}}>
                                {experince.company}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TimelineBar