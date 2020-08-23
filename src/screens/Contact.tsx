import React, { useCallback, useState } from 'react'
import {colors, ScreenName} from '../constants'
import {Tooltip} from '@material-ui/core'

export interface Props{

}

const Contact = (props: Props) => {
    const color = colors[ScreenName.contact]
    const [copied, setCopied] = useState(false)
    const copyLink = useCallback(() => {
        const textArea = document.createElement("textarea");
        textArea.value = 'rexmo@connect.hku.hk'
        textArea.style.top = "0"
        textArea.style.left = "0"
        textArea.style.position = "fixed"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
            document.execCommand('copy')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
        }
        document.body.removeChild(textArea)
    }, [])

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%'}}>
            <div className='rm-text-h2 animate__animated animate__backInDown'>
                {'Email me at '}
                <Tooltip title={<div className='rm-text-5'>{copied ? 'copied' : 'click to copy'}</div>} placement='top' arrow={true}>
                <span onClick={copyLink} className='rm-link' style={{color: color.textSecondary}}>rexmo@connect.hku.hk</span>
                </Tooltip>
            </div>
        </div>
    )
}

export default Contact