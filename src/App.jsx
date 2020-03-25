import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes
import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Products from './routes/Products/Products.jsx'

// Components
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

// Styles
import './App.css'
import './reset.css'

// Utils
import validatedRoute from './utils/routes/validated-route.jsx'
import validatorProducts from './utils/routes/validator-products.js'

const App = () => {
	return (
		<>
			<Header />
			<Navbar />

			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route
						exact
						path={['/products/:category/:subcategory', '/products/:category']}
						component={validatedRoute(validatorProducts)(Products)}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>

			<Footer />
		</>
	)
}

export default App
