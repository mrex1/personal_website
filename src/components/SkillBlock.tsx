import React, { useCallback } from 'react'
import {SkillCategory, Skill, SkillLevel} from '../models'
import {Grid} from '@material-ui/core'
import clsx from 'clsx'
import {globalProps} from '../models'
import './SkillBlock.css'

export interface Props extends globalProps {
    category: SkillCategory;
    skills: Skill[];
}

const SkillItem = (skill: Skill) => {
    const getNumericalLevel = useCallback((level: SkillLevel) => {
        const values = Object.values(SkillLevel)
        const result = (values.length - values.indexOf(level)) / values.length
        return result < 0.4 ? 0.4 : result
    }, [])

    const getLevelClass = useCallback((level: SkillLevel) => {
        switch(level) {
            case SkillLevel.low:
                return 'low-level'
            case SkillLevel.mid:
                return 'mid-level'
            case SkillLevel.top:
                return 'top-level'
            default:
                throw new Error('SkillLevel was not supported')
        }
    }, [])

    const levelClass = getLevelClass(skill.level)
    const levelNumeric = getNumericalLevel(skill.level)

    return (
        <Grid className={levelClass + ' skill-item-container'} container>
            <Grid className='skill-block-text' item xs={6}>{skill.name}</Grid>
            <Grid className='skill-block-small-text' container item xs={6}>
                <Grid item xs={12}>
                    <div className='skill-item-level' style={{width: 100 * levelNumeric + '%', height: 10}}/>
                </Grid>
                <Grid item xs={12}>
                    <div>{skill.level}</div>
                </Grid>
            </Grid>
        </Grid>
    )
}

const keyPrefix = Math.random() + ''

const SkillBlock = ({category, skills, darkMode}: Props) => {
    return (
        <div className={clsx('skill-block-container', {dark: darkMode})}>
            <div className='skill-block-category'>{category}</div>
            {skills.map((skill, i) => <SkillItem key={keyPrefix + i} {...skill}/>)}
        </div>
    )
}

export default SkillBlock