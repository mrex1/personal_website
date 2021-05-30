import React, { useState, useCallback, useEffect } from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom"
import Background from './components/Background'
import NavBar from './components/NavBar'
import NextBtn from './components/NextBtn'
import routes from './routes'
import {ScreenName} from './constants'
import './App.css'

const tabs = Object.keys(ScreenName)
			.filter(key => (key !== 'home'))
			.map(key => ScreenName[key])

function useTransition() {
	const [ending, setEnding] = useState(false)
	const goto = useCallback((navCallback) => {
        setEnding(true)
        setTimeout(() => {
            navCallback()
            setEnding(false)
        }, 300)
	}, [])
	return [ending, goto]
}

function App() {
	const [ending, goto] = useTransition()
	const [darkMode, setDarkMode] = useState(0)
	useEffect(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setDarkMode(1)
		}
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			if (event.matches) {
				setDarkMode(1)
			} else {
				setDarkMode(0)
			}
		})
	}, [])
	return (
		<HashRouter basename='/'>
		<Background start={!ending} darkMode={darkMode}>
			<NavBar tabs={tabs} goto={goto} setDarkMode={setDarkMode} darkMode={darkMode}/>
            <NextBtn
			loading={ending}
			goto={goto}
			darkMode={darkMode}/>
			<Switch>
				{
					Object.keys(routes)
					.reverse()
					.map(path => {
						const Screen = routes[path]
						return (
							<Route path={path} key={path}>
								{props => <Screen {...props} goto={goto} darkMode={darkMode}/>}
							</Route>
						)
					})
				}
			</Switch>
		</Background>
		</HashRouter>
	);
}

export default App;
