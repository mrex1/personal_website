import React from 'react'
import './Background.css'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { colors } from '../constants/color.constant'
import {pathToName} from '../utils/namePathTranslation'

export interface Props {
    reversed?: boolean;
}

const Background = ({reversed}: Props) => {
    const {pathname} = useLocation()
    const curScreenName = pathToName(pathname)
    const color = colors[curScreenName]

    return (
    <div className='Background animate__animated animate__fadeIn' style={{background: color.primary}}>
        <div className={clsx('bottom-eclipse animate__animated animate__fadeInUp', {reversed})} style={{background: color.secondary}}></div>
        <div className={clsx('top-eclipse animate__animated animate__fadeInDown', {reversed})} style={{background: color.secondary}}></div>
    </div>
    )
}

export default Background