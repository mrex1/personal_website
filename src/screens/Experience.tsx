import React from 'react'
import Timeline from '../components/Timeline'
import {myExperiences} from '../data'
import {colors, ScreenName} from '../constants'

export interface Props{

}

const Experience = (props: Props) => {
    const color = colors[ScreenName.experience]
    return (
        <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='animate__animated animate__flipInX' style={{height: '70%', width: '85%', color: color.textSecondary}}>
            <Timeline experiences={myExperiences}/>
            </div>
        </div>
    )
}

export default Experience