import React from 'react'
import {myProjects} from '../data'
import ProjectBlock from '../components/ProjectBlock'

export interface Props{

}

const keyPrefix = Math.random() + ''

const Project = (props: Props) => {
    return (
        <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div
            className='animate__animated animate__fadeInLeft'
            style={{position: 'relative', padding: 5, overflow: 'auto', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            {
                myProjects.map((proj, i) => 
                    <ProjectBlock key={keyPrefix + i} project={proj}/>)
            }
            </div>
        </div>
    )
}

export default Project