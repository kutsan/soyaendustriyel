import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes
import Home from './routes/Home'
import About from './routes/About'
import Products from './routes/Products'

// Components
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

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
					<Route path='/products/:category' component={Products} />
					<Route component={NotFound} />
				</Switch>
			</main>

			<Footer />
		</>
	)
}

export default App
