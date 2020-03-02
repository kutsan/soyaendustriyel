import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Screens
import Home from './routes/Home'
import About from './routes/About'

// Components
import Header from './components/Header.jsx'
import NavChan from './components/NavChan.jsx'
import Footer from './components/Footer.jsx'

// Styles
import './style.css'

const App = () => {
	return (
		<div className='layout'>
			<Header />
			<NavChan />

			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</main>

			<Footer />
		</div>
	)
}

export default App
