import React, { useCallback } from 'react'
import { colors } from '../constants'
import {nameToPath, pathToName, getNextScreen, getScreenName} from '../utils/namePathTranslation'
import {useLocation, useHistory} from 'react-router-dom'
import {CircularProgress} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import clsx from 'clsx'
import {globalProps} from '../models'
import './NextBtn.css'

export interface Props extends globalProps {
    goto: (callback: () => void) => void;
    loading: boolean;
}

const NextBtn = ({goto, loading, darkMode}: Props) => {
    const history = useHistory()
	const {pathname} = useLocation()
    const curScreenName = pathToName(pathname)
    const nextScreen = getNextScreen(curScreenName)
    const nextScreenName = getScreenName(nextScreen)
    const color = colors[darkMode][nextScreen]

    const handleNext = useCallback(() => {
        goto(() => history.push(nameToPath(nextScreen)))
    }, [goto, nextScreen, history])

    return (
        <div
        className='next-btn animate__animated animate__fadeInRight'
        style={{color: color.nextBtn}}
        onClick={handleNext}>
            <span className={clsx('next-text', {loading})}>{nextScreenName}</span>
            {!loading && <ArrowForwardIcon className='next-arrow' fontSize='large'/>}
            {loading && <CircularProgress size={35}/>}
        </div>
    )
}

export default NextBtn