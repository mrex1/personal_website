import React, {useState, useCallback} from 'react'
import './NavBar.css'
import Logo from './Logo'
import { useLocation, useHistory } from 'react-router-dom'
import {useMediaQuery} from '@material-ui/core'
import {pathToName, nameToPath} from '../utils/namePathTranslation'
import {colors, ScreenName} from '../constants'
import Drawer from './Drawer'

export interface Props {
    tabs: ScreenName[];
    goto: (callback: () => void) => void;
}

const NavBar = ({tabs, goto}: Props) => {
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

    const color = colors[curScreenName]

    return (
        <div className='navbar-container'>
            <Logo bgColor={color.logoBack} textColor={color.logoText} goHome={getNavigateHandler(ScreenName.home)}/>
            <div className='navbar-space'/>
            {!showDrawer && <div className='navbar-tabs'>
            {
                tabs.map((name) => (
                    <div style={{color: hover[name] === true || curScreenName === name ?
                        color.textSecondary : color.inactive}} onClick={getNavigateHandler(name)} key={name}
                    onMouseOver={hoverHandler(name)} onMouseLeave={hoverEndHandler(name)}>{name}</div>
                ))
            }
            </div>}
            {showDrawer && <Drawer tabs={tabs} currentScreen={curScreenName} goto={goto}/>}
        </div>
    )
}

export default NavBar