import React, { useState, useCallback } from 'react'
import {ScreenName, colors} from '../constants'
import Link from '../components/Link'
import clsx from 'clsx'
import './Drawer.css'

export interface Props {
    tabs: ScreenName[];
    currentScreen: ScreenName;
    goto: (callback: () => void) => void;
}

const keyPrefix = Math.random() + ''

const Drawer = ({tabs, currentScreen, goto}: Props) => {
    const [show, setShow] = useState(false)
    const color = colors[currentScreen]
    const closeDrawer = useCallback(() => {
        setShow(false)
    }, [])
    const toggleDrawer = useCallback(() => {
        setShow(!show)
    }, [show])

    const drawerBtnColor = color.drawerBtn ? color.drawerBtn : color.textSecondary
    const drawerInactiveLinkColor = color.drawerText ? color.drawerText : color.inactive

    return (
        <div>
            <div className={clsx('drawer-background-mask', {show})} onClick={closeDrawer}/>
            <div className={clsx('drawer-container', {show, hide: !show})}
            style={{backgroundColor: color.drawerBg ? color.drawerBg : color.primary}}>
                {
                    tabs.map((tab, i) =>
                        <Link
                        key={keyPrefix + 'drawer' + i}
                        className='rm-text-h2'
                        style={{color: tab === currentScreen ? color.textSecondary : drawerInactiveLinkColor,
                        textDecoration: 'none',
                        marginTop: 30}}
                        screen={tab}
                        goto={(callback) => {
                            closeDrawer()
                            goto(callback)}}>{tab}</Link>
                    )
                }
            </div>
            <div onClick={toggleDrawer} className={clsx('drawer-btn', {show})}>
                <div className={clsx('drawer-btn-line', {'first-line': show})} style={{backgroundColor: drawerBtnColor}}/>
                <div className={clsx('drawer-btn-line', {'mid-line': show})} style={{backgroundColor: drawerBtnColor, top:15.5}}/>
                <div className={clsx('drawer-btn-line', {'last-line': show})} style={{backgroundColor: drawerBtnColor, top:31}}/>
            </div>
        </div>
    )
}

export default Drawer