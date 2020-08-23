import React from 'react'
import {colors, ScreenName} from '../constants'
import Link from '../components/Link'
import LabelIcon from '@material-ui/icons/Label'

export interface Props{
    goto: (callback: () => void) => void;
    history: any;
}

const keyPrefix = Math.random() + ''

const About = ({history, goto}: Props) => {
    const color = colors[ScreenName.about]
    const details = [
        <span>
            {`majoring at `}
            <Link
            path='https://www.eee.hku.hk/study/undergraduate/computer-engineering/'
            style={{color: color.textSecondary}}>computer engineering</Link>
            {` in `}
            <Link
            path='https://www.hku.hk/'
            style={{color: color.textSecondary}}>HKU</Link>
            , graduating in June 2021
        </span>,
        <span>
        {'Have done '}
        <Link
        screen={ScreenName.experience}
        goto={goto}
        style={{color: color.textSecondary}}>three internships</Link>
        {', mainly involved in front-end development'}</span>,
        <span>enjoy writing clean and simple code</span>
    ]
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginLeft: 200, zIndex: 1}}>
            <div className='rm-text-h1 animate__animated animate__fadeInUp' style={{marginBottom: 20}}>
                I build
                <span style={{color: color.textSecondary}}> apps</span> and
                <span style={{color: color.textSecondary}}> websites</span></div>
            {
                details.map((detail, i) =>
                    <div key={keyPrefix + i} className='rm-text-3 animate__animated animate__slideInLeft'
                        style={{animationDelay: (0.3 * (i + 1)) + 's', marginBottom: 10}}>
                        <LabelIcon style={{fontSize: 'inherit', verticalAlign: 'middle', marginRight: 5}}/>
                        {detail}
                    </div>)
            }
        </div>
    )
}

export default About