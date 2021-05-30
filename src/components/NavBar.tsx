import React, {useState, useCallback} from 'react'
import './NavBar.css'
import Logo from './Logo'
import { useLocation, useHistory } from 'react-router-dom'
import {useMediaQuery} from '@material-ui/core'
import {pathToName, nameToPath} from '../utils/namePathTranslation'
import {colors, ScreenName} from '../constants'
import Drawer from './Drawer'
import DarkModeBtn from './DarkModeBtn'
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
            <DarkModeBtn setDarkMode={setDarkMode} darkMode={darkMode} style={{marginRight: 0}}/>
            </div>}
            {showDrawer && <DarkModeBtn setDarkMode={setDarkMode} darkMode={darkMode} style={{marginRight: 40}}/>}
            {showDrawer && <Drawer tabs={tabs} currentScreen={curScreenName} goto={goto} darkMode={darkMode}/>}
        </div>
    )
}

export default NavBar