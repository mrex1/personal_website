import React, {useState, useCallback} from 'react'
import './NavBar.css'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {pathToName} from '../utils/namePathTranslation'
import {colors} from '../constants/color.constant'

export interface Props {
    tabs: string[];
}

const NavBar = ({tabs}: Props) => {
    const [hover, setHover] = useState<any>({})
    const {pathname} = useLocation()
    const curScreenName = pathToName(pathname)

    const hoverHandler = useCallback((name) => () => 
        setHover((hover: any) => ({...hover, [name]: true}))
    , [])

    const hoverEndHandler = useCallback((name) => () => {
        setHover((hover: any) => ({...hover, [name]: false}))
    }, [])

    const color = colors[curScreenName]

    return (
        <div className='navbar-container'>
            <Logo bgColor={color.logoBack} textColor={color.logoText}/>
            <div className='navbar-space'/>
            <div className='navbar-tabs'>
            {
                tabs.map((name) => (
                    <Link style={{color: hover[name] === true || curScreenName === name ?
                        color.textSecondary : color.inactive}} to={name} key={name}
                    onMouseOver={hoverHandler(name)} onMouseLeave={hoverEndHandler(name)}>{name}</Link>
                ))
            }
            </div>
        </div>
    )
}

export default NavBar