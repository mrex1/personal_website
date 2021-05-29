import React from 'react'
import {myProjects} from '../data'
import ProjectBlock from '../components/ProjectBlock'
import {globalProps} from '../models'
import './Project.css'

export interface Props extends globalProps {}
const keyPrefix = Math.random() + ''

const Project = ({darkMode}: Props) => {
    return (
        <div className='Project-container'>
            <div
            className='animate__animated animate__fadeInLeft Project-inner-container'>
            {
                myProjects.map((proj, i) => 
                    <ProjectBlock key={keyPrefix + i} project={proj} darkMode={darkMode}/>)
            }
            </div>
        </div>
    )
}

export default Project