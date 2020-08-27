import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {nameToPath} from '../utils'
import {ScreenName} from '../constants'

export interface Props extends React.HTMLProps<HTMLAnchorElement> {
    path?: string;
    screen?: ScreenName;
    style: React.CSSProperties;
    goto?: (callback: () => void) => void;
    children?: React.ReactNode;
}

const Link = ({path, screen, style, children, goto, className, ...rest}: Props) => {
    const history = useHistory()
    const navigateTo = useCallback(() => {
        if (screen === undefined || goto === undefined) {
            throw new Error('specify screen + goto')
        }
        goto(() => history.push(nameToPath(screen)))
    }, [history, goto, screen])
    if (path === undefined && (screen === undefined || goto === undefined)) {
        throw new Error('specify either path/(screen + goto) for Link')
    }
    if (path !== undefined) {
        return (
            <a
            target='_blank'
            rel='noopener noreferrer'
            className='className'
            style={style}
            {...rest}
            href={path}>{children}</a>
        )
    }
    return (
        <span onClick={navigateTo} className={`rm-link ${className}`} {...rest} style={style}>{children}</span>
    )
}

export default Link