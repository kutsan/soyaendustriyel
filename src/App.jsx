import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes
import Home from './routes/Home'
import About from './routes/About'

// Components
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

// Styles
import './App.css'
import './reset.css'

const App = () => {
	return (
		<>
			<Header />
			<Navbar />

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
