import React from 'react'
import {ScreenName, colors} from '../constants'
import {globalProps} from '../models'
import './Home.css'

export interface Props extends globalProps {
    history: any;
}

const Home = ({history, darkMode}: Props) => {
    const homeColor = colors[darkMode][ScreenName.home]
    return (
        <div className='Home-container'>
            <div style={{color: homeColor.textPrimary}}>
            <div className='rm-text-h3 animate__animated animate__fadeInUp' style={{color: homeColor.textSecondary, animationDelay: '0.3s'}}>Hi, I am</div>
            <div className='rm-text-h1 animate__animated animate__fadeInUp' style={{marginTop: 15, marginBottom: 15, animationDelay: '1s'}}>Rex Mo</div>
            <div className='rm-text-1 rm-typed-anime' style={{animationDelay: '1.8s'}}>A Software Engineer in Hong Kong</div>
            </div>
        </div>
    )
}

export default Home