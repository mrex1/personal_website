import React from 'react'
import Timeline from '../components/Timeline'
import {myExperiences} from '../data'
import {colors, ScreenName} from '../constants'
import {globalProps} from '../models'
import './Experience.css'

export interface Props extends globalProps{}

const Experience = ({darkMode}: Props) => {
    const color = colors[darkMode][ScreenName.experience]
    return (
        <div className='Experience-container'>
            <div className='animate__animated animate__flipInX Experience-inner-container' style={{color: color.textSecondary}}>
            <Timeline experiences={myExperiences} darkMode={darkMode}/>
            </div>
        </div>
    )
}

export default Experience