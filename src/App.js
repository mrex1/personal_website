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

const tabs = Object.keys(ScreenName)
			.filter(key => (key !== 'home'))
			.map(key => ScreenName[key])
function App() {
	return (
		<Router>
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
