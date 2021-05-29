import React, { useState } from 'react'
import {Project} from '../models'
import {colors, ScreenName} from '../constants'
import Link from '../components/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import {globalProps} from '../models'
import './ProjectBlock.css'

export interface Props extends globalProps {
    project: Project
}

const ProjectBlock = ({project, darkMode}: Props) => {
    const [hover, setHover] = useState(false)
    const color = colors[darkMode][ScreenName.project]
    return (
        <div className='project-block-container' style={{color: color.textPrimary}}>
            <img className='project-block-image' alt={project.name} src={project.image}/>
            <div className='project-block-title'>{project.name}</div> 
            <div className='rm-text-5 project-block-content'>{project.description}</div>
            <div className='project-block-action'>
                {
                    project.github && 
                    <Link path={project.github} style={{color: color.textSecondary}}>
                        <GitHubIcon/>
                    </Link>
                }
                <div style={{flex: 1}}/>
                {
                    project.action &&
                    <Link
                    className='project-block-btn'
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={{
                        border: '2px solid ' + color.textSecondary,
                        color: hover ? 'black' : color.textSecondary,
                        backgroundColor: hover ? color.textSecondary : 'transparent'
                    }}
                    path={project.action.path}>{project.action.title}</Link>
                }
            </div> 
        </div>
    )
}

export default ProjectBlock