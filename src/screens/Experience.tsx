import React from 'react'
import Timeline from '../components/Timeline'
import {myExperiences} from '../data'
import {colors, ScreenName} from '../constants'
import './Experience.css'

export interface Props{

}

const Experience = (props: Props) => {
    const color = colors[ScreenName.experience]
    return (
        <div className='Experience-container'>
            <div className='animate__animated animate__flipInX Experience-inner-container' style={{color: color.textSecondary}}>
            <Timeline experiences={myExperiences}/>
            </div>
        </div>
    )
}

export default Experience