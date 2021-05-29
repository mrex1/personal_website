import React from 'react'
import SkillBlock from '../components/SkillBlock'
import {myskills, Skills} from '../data'
import {getKeys} from '../utils'
import {globalProps} from '../models'
import './Skill.css'

export interface Props extends globalProps {}

const keyPrefix = Math.random() + ''

const Skill = ({darkMode}: Props) => {
    return (
        <div className='Skill-container'>
        <div className='animate__animated animate__slideInUp Skill-inner-container'>
            {
                getKeys<Skills, keyof Skills>(myskills)
                .map((category, i) => 
                    <SkillBlock key={keyPrefix + i} darkMode={darkMode} category={category} skills={myskills[category]}/>)
            }
            <div className='Skill-padding-block'/>
        </div>
        </div>
    )
}

export default Skill