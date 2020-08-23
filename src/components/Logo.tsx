import React from 'react'
import './Logo.css'

export interface Props {
    bgColor: string;
    textColor: string;
    goHome: () => void;
}

const Logo = ({bgColor, textColor, goHome}: Props) => {
    return (
        <div
        className='logo'
        style={{backgroundColor: bgColor, color: textColor}}
        onClick={goHome}>
            REX M0
        </div>
    )
}

export default Logo