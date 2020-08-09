import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import NavBar from './components/NavBar'
import routes from './routes'
import {ScreenName} from './constants/screenName.constant'
import './App.css'

const tabs = Object.values(ScreenName)
			.filter(screenName => (screenName !== ''))

const routeNames = {}
Object.values(ScreenName)
.map(screenName => Object.assign(routeNames, {[screenName]: '/' + screenName}))

function App() {
	return (
		<Router
		routes={routeNames}>
		<div className="App">
			<NavBar tabs={tabs}/>
			<Switch>
				{
					Object.keys(routes)
					.reverse()
					.map(path => {
						const Screen = routes[path]
						return (
							<Route path={path} key={path}>
								{props => <Screen {...props}/>}
							</Route>
						)
					})
				}
			</Switch>
		</div>
		</Router>
	);
}

export default App;
