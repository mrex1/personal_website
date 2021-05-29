import React, {useState, useCallback} from 'react'
import './NavBar.css'
import Logo from './Logo'
import { useLocation, useHistory } from 'react-router-dom'
import {useMediaQuery} from '@material-ui/core'
import {pathToName, nameToPath} from '../utils/namePathTranslation'
import {colors, ScreenName} from '../constants'
import Drawer from './Drawer'
import {globalProps} from '../models'

export interface Props extends globalProps {
    tabs: ScreenName[];
    goto: (callback: () => void) => void;
    setDarkMode: (isDarkMode: number) => void;
}

const NavBar = ({tabs, goto, setDarkMode, darkMode}: Props) => {
    const showDrawer = useMediaQuery('(max-width:740px)')
    const history = useHistory()
    const [hover, setHover] = useState<any>({})
    const {pathname} = useLocation()
    const curScreenName = pathToName(pathname)

    const hoverHandler = useCallback((name) => () => 
        setHover((hover: any) => ({...hover, [name]: true}))
    , [])

    const hoverEndHandler = useCallback((name) => () => {
        setHover((hover: any) => ({...hover, [name]: false}))
    }, [])

    const getNavigateHandler = useCallback((screen: ScreenName) => () => {
        if (curScreenName !== screen) {
            goto(() => history.push(nameToPath(screen)))
        }
    }, [goto, history, curScreenName])

    const toggleDarkMode = useCallback(() => {
        setDarkMode(darkMode^1)
    }, [setDarkMode, darkMode])

    const color = colors[darkMode][curScreenName]

    return (
        <div className='navbar-container'>
            <Logo bgColor={color.logoBack} textColor={color.logoText} goHome={getNavigateHandler(ScreenName.home)}/>
            <div className='navbar-space'/>
            {!showDrawer &&
            <div className='navbar-tabs'>
            {
                tabs.map((name) => (
                    <div style={{color: hover[name] === true || curScreenName === name ?
                        color.textSecondary : color.inactive}} onClick={getNavigateHandler(name)} key={name}
                    onMouseOver={hoverHandler(name)} onMouseLeave={hoverEndHandler(name)}>{name}</div>
                ))
            }
            <div onClick={toggleDarkMode} style={{color: color.textPrimary}}>
                dark
            </div>
            </div>}
            {showDrawer && <Drawer tabs={tabs} currentScreen={curScreenName} goto={goto} darkMode={darkMode}/>}
        </div>
    )
}

export default NavBar