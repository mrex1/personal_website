import React, {useState, useCallback, useRef, useLayoutEffect} from 'react'
import { Grid } from '@material-ui/core'
import {Experiences, Experience} from '../models'
import AnimatedNumber from "animated-number-react"
import TimelineBar from './TimelineBar'
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import clsx from 'clsx'
import './Timeline.css'

export interface Props {
    experiences: Experiences;
}

const keyPrefix = Math.random() + ''

const Timeline = ({experiences}: Props) => {
    const [selExp, setSelExp] = useState<Experience>(experiences.experiences[0])
    const [contentHeight, setContentHeight] = useState<number>()
    const content = useRef<HTMLDivElement>()

    const getDayMonth = useCallback((unixTime: number) => {
        const date = new Date(unixTime)
        const day = date.getDate()
        const fDay = day < 10 ? '0' + day : day
        const month = date.getMonth() + 1
        const fMonth = month < 10 ? '0' + month : month
        return  fDay + '/' + fMonth
    }, [])

    const getYear = useCallback((unixTime: number) => {
        const date = new Date(unixTime)
        return date.getFullYear()
    }, [])

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

    return (
        <Grid container className='time-line-container' alignItems='center' justify='center'>
            <div className='time-line-date-container'>
                <div className='time-line-year rm-text-h1'>
                    <AnimatedNumber value={startTime} formatValue={getYear} duration={300}/>
                </div>
                <div className='rm-text-3'>
                    <AnimatedNumber value={startTime} formatValue={getDayMonth} duration={300}/>
                    {' ~ '}
                    <AnimatedNumber value={endTime} formatValue={getDayMonth} duration={300}/>
                </div>
            </div>
            <div className='time-line-bar-outter-container'>
                <TimelineBar selectedExp={selExp} experinces={experiences} onSelect={handleSelExp}/>
            </div>
            <div className={clsx('time-line-content-container')}>
                <div className='rm-text-h3'>{jobPost}</div>
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
                                {des}
                            </div>
                        ))}
                    </span>
                </div>
            </div>
        </Grid>
    )
}

export default Timeline