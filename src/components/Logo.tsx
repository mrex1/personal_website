import React from 'react'
import './Logo.css'
import {Link} from 'react-router-dom'
import {nameToPath} from '../utils/namePathTranslation'
import {ScreenName} from '../constants/screenName.constant'

export interface Props {
    bgColor: string;
    textColor: string;
}

const Logo = ({bgColor, textColor}: Props) => {
    return (
        <div className='logo' style={{backgroundColor: bgColor, color: textColor}}>
            <Link to={nameToPath(ScreenName.home)}>REX M0</Link>
        </div>
    )
}

export default Logo