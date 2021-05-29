import React from 'react'
import './Background.css'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { colors, reverseMap } from '../constants'
import {pathToName} from '../utils/namePathTranslation'
import {globalProps} from '../models'

export interface Props extends globalProps {
    children?: React.ReactNode;
    start: boolean;
}

const Background = ({children, start, darkMode}: Props) => {
    const {pathname} = useLocation()
    const curScreenName = pathToName(pathname)
    const color = colors[darkMode][curScreenName]
    const reversed = reverseMap[curScreenName]

    return (
    <div
    className={`Background animate__animated animate__fadeIn`}
    style={{background: color.primary}}>
        <div
        className={clsx('bottom-eclipse',
                    {reversed},
                    {'animate__animated animate__fadeInUp': start},
                    {'animate__animated animate__fadeOutDown': !start})}
        style={{background: color.secondary}}></div>
        <div
        className={clsx('top-eclipse',
                    {reversed},
                    {'animate__animated animate__fadeInDown': start},
                    {'animate__animated animate__fadeOutUp': !start})}
        style={{background: color.secondary}}></div>
        {children}
    </div>
    )
}

export default Background