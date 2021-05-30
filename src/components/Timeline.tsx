import React, {useState, useCallback, useRef, useLayoutEffect} from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import {Experiences, Experience} from '../models'
import TimelineBar from './TimelineBar'
import TimeText from './TimeText'
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined'
import {globalProps} from '../models'
import clsx from 'clsx'
import './Timeline.css'
import { colors, ScreenName } from '../constants'

export interface Props extends globalProps {
    experiences: Experiences;
}

const keyPrefix = Math.random() + ''

const Timeline = ({experiences, darkMode}: Props) => {
    const smallScreen = useMediaQuery('(max-width:735px)')
    const [selExp, setSelExp] = useState<Experience>(experiences.experiences[0])
    const [contentHeight, setContentHeight] = useState<number>()
    const content = useRef<HTMLDivElement>()
    const handleSelExp = useCallback((exp: Experience) => {
        setSelExp(exp)
    }, [])

    useLayoutEffect(() => {
        if (content?.current) {
            const contentSpan = content.current
            setContentHeight(contentSpan.clientHeight)
        }
    }, [selExp])

    const {startDate, endDate, jobPost, company, description, companySite} = selExp
    const startTime = startDate.getTime()
    const endTime = endDate.getTime()
    const color = colors[darkMode][ScreenName.experience]

    return (
        <Grid container className='time-line-container' alignItems='center' justify='center' style={{flexWrap: 'nowrap'}}>
            {!smallScreen && <TimeText startTime={startTime} endTime={endTime}/>}
            <div className='time-line-bar-outter-container'>
                <TimelineBar selectedExp={selExp} experinces={experiences} onSelect={handleSelExp}/>
            </div>
            <div className='time-line-right'>
                {smallScreen && <TimeText startTime={startTime} endTime={endTime}/>}
                <div className={clsx('time-line-content-container', {dark: darkMode})}>
                    <div className='rm-text-h3' style={{color: color.textSecondary}}>{jobPost}</div>
                    {companySite ? 
                        <a
                        className='rm-text-6 company-name'
                        href={companySite} target='_blank' rel='noopener noreferrer'>{company}</a> :
                        <div className='rm-text-6 company-name'>{company}</div>
                    }
                    <div className='rm-text-5 time-line-content-inner-container' style={{height: contentHeight}}>
                        <span ref={content as any} style={{display: 'inline-block'}}>
                            {description.map((des, i) => (
                                <div className='time-line-content-bullet' key={keyPrefix + 'des' + i}>
                                    <NavigationOutlinedIcon
                                    style={{verticalAlign: 'top',fontSize: 'inherit', transform: 'rotateZ(90deg)', marginRight: 5}}/>
                                    <div>{des}</div>
                                </div>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default Timeline