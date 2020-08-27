import React from 'react'
import {myProjects} from '../data'
import ProjectBlock from '../components/ProjectBlock'
import './Project.css'

export interface Props{

}

const keyPrefix = Math.random() + ''

const Project = (props: Props) => {
    return (
        <div className='Project-container'>
            <div
            className='animate__animated animate__fadeInLeft Project-inner-container'>
            {
                myProjects.map((proj, i) => 
                    <ProjectBlock key={keyPrefix + i} project={proj}/>)
            }
            </div>
        </div>
    )
}

export default Project