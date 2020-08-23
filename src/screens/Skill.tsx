import React from 'react'
import SkillBlock from '../components/SkillBlock'
import {myskills, Skills} from '../data'
import {getKeys} from '../utils'

export interface Props{

}

const keyPrefix = Math.random() + ''

const Skill = (props: Props) => {
    return (
        <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className='animate__animated animate__slideInUp' style={{overflow: 'auto', height: '70%', maxHeight: 500, width: '85%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
            {
                getKeys<Skills, keyof Skills>(myskills)
                .map((category, i) => 
                    <SkillBlock key={keyPrefix + i} category={category} skills={myskills[category]}/>)
            }
        </div>
        </div>
    )
}

export default Skill