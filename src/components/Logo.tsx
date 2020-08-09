import React from 'react'
import './Logo.css'
import {Link} from 'react-router-dom'

export interface Props {
    bgColor: string;
    textColor: string;
}

const Logo = ({bgColor, textColor}: Props) => {
    return (
        <div className='logo' style={{backgroundColor: bgColor, color: textColor}}>
            <Link to='/'>REX M0</Link>
        </div>
    )
}

export default Logo