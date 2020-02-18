import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Screens
import Home from './screens/Home'
import About from './screens/About'

// Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// Styles
import './style.css'

const App = () => {
	return (
		<>
			<Header />

			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</main>

			<Footer />
		</>
	)
}

export default App
