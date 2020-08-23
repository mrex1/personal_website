import React, { useState } from 'react'
import {Project} from '../models'
import {colors, ScreenName} from '../constants'
import Link from '../components/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import './ProjectBlock.css'

export interface Props {
    project: Project
}

const ProjectBlock = ({project}: Props) => {
    const [hover, setHover] = useState(false)
    const color = colors[ScreenName.project]
    return (
        <div className='project-block-container' style={{color: color.textPrimary}}>
            <img className='project-block-image' alt={project.name} src={project.image}/>
            <div className='rm-text-h3 project-block-title'>{project.name}</div> 
            <div className='rm-text-5 project-block-content'>{project.description}</div>
            <div className='project-block-action'>
                {
                project.github && 
                    <Link path={project.github} style={{color: color.textSecondary}}>
                        <GitHubIcon/>
                    </Link>
                }
                <div style={{flex: 1}}/>
                <Link
                className='project-block-btn'
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                style={{
                    border: '2px solid ' + color.textSecondary,
                    color: hover ? 'black' : color.textSecondary,
                    backgroundColor: hover ? color.textSecondary : 'transparent'
                }}
                path='https://i.cs.hku.hk/~cfmo/sorting_visualization/'>Play</Link>
            </div> 
        </div>
    )
}

export default ProjectBlock