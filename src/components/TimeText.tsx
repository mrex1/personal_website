import React, {useCallback} from 'react'
import AnimatedNumber from "animated-number-react"
import './TimeText.css'

export interface Props {
    startTime: number;
    endTime: number;
}

const TimeText = ({startTime, endTime}: Props) => {
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

    return (
        <div className='time-text-container'>
            <div className='rm-text-h1'>
                <AnimatedNumber value={startTime} formatValue={getYear} duration={300}/>
            </div>
            <div className='rm-text-3'>
                <AnimatedNumber value={startTime} formatValue={getDayMonth} duration={300}/>
                {' ~ '}
                <AnimatedNumber value={endTime} formatValue={getDayMonth} duration={300}/>
            </div>
        </div>
    )
}

export default TimeText