import React from 'react'
import Background from '../components/Background'

export interface Props{
    history: any;
}

const Home = ({history}: Props) => {
    return (
        <div>
            <Background/>
        </div>
    )
}

export default Home