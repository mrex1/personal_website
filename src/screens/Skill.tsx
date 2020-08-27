import React from 'react'
import SkillBlock from '../components/SkillBlock'
import {myskills, Skills} from '../data'
import {getKeys} from '../utils'
import './Skill.css'

export interface Props{

}

const keyPrefix = Math.random() + ''

const Skill = (props: Props) => {
    return (
        <div className='Skill-container' style={{}}>
        <div className='animate__animated animate__slideInUp Skill-inner-container'>
            {
                getKeys<Skills, keyof Skills>(myskills)
                .map((category, i) => 
                    <SkillBlock key={keyPrefix + i} category={category} skills={myskills[category]}/>)
            }
            <div className='Skill-padding-block'/>
        </div>
        </div>
    )
}

export default Skill