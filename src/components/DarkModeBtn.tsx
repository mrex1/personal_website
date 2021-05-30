import React, {useCallback} from 'react'
import {globalProps} from '../models'
import clsx from 'clsx'
import './DarkModeBtn.css'

export interface Props extends globalProps{
    setDarkMode: (isDarkMode: number) => void;
    style?: any;
}

const DarkModeBtn = ({darkMode, setDarkMode, style}: Props) => {
    const toggleDarkMode = useCallback(() => {
        setDarkMode(darkMode^1)
    }, [setDarkMode, darkMode])

    return (
        <div style={style} onClick={toggleDarkMode} className={clsx('dark-mode-btn', {dark: darkMode})}>
            <div className={'dark-mode-btn-inner'}/>
        </div>
    )
}

export default DarkModeBtn