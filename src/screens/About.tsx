import React from 'react'
import {colors, ScreenName} from '../constants'
import Link from '../components/Link'
import GraducationCap from '../images/graduationCap.png'
import SmileWithHeart from '../images/smileWithHeart.png'
import Suitcase from '../images/suitcase.png'
import './About.css'

export interface Props{
    goto: (callback: () => void) => void;
    history: any;
}

const keyPrefix = Math.random() + ''

const About = ({history, goto}: Props) => {
    const color = colors[ScreenName.about]
    const details = [
        <div style={{display: 'flex'}}>
            <img src={GraducationCap} alt='' className='rm-emoji'/>
            <div>{`Majoring at `}
            <Link
            path='https://www.eee.hku.hk/study/undergraduate/computer-engineering/'
            style={{color: color.textSecondary}}>computer engineering</Link>
            {` in `}
            <Link
            path='https://www.hku.hk/'
            style={{color: color.textSecondary}}>HKU</Link>
            , graduating in June 2021</div>
        </div>,
        <div style={{display: 'flex'}}>
        <img src={Suitcase} alt='' className='rm-emoji'/>
        <div>{'Did '}
        <Link
        screen={ScreenName.experience}
        goto={goto}
        style={{color: color.textSecondary}}>three internships</Link>
        {', mainly involved in front-end development'}</div></div>,
        <div style={{display: 'flex'}}><img src={SmileWithHeart} alt='' className='rm-emoji'/><div>{' Love writing clean and simple code'}</div></div>
    ]
    return (
        <div className='about-page-container'>
            <div className='rm-text-h1 animate__animated animate__fadeInUp' style={{marginBottom: 20}}>
                I build
                <span style={{color: color.textSecondary}}> apps</span> and
                <span style={{color: color.textSecondary}}> websites</span></div>
            {
                details.map((detail, i) =>
                    <div key={keyPrefix + i} className='rm-text-3 animate__animated animate__fadeInLeft'
                        style={{animationDelay: (0.3 * (i + 1)) + 's', marginBottom: 10}}>
                        {detail}
                    </div>)
            }
        </div>
    )
}

export default About