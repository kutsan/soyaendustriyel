import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

// Styles
import './reset.css'
import './App.css'

// Routes
import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Products from './routes/Products/Products.jsx'
import NotFound from './routes/NotFound/NotFound.jsx'

// Layouts
import LayoutDefault from './layouts/default.jsx'

// Utils
import validatedRoute from './utils/routes/validated-route.jsx'
import validatorProducts from './utils/routes/validator-products.js'

const App = () => {
	return (
		<Switch>
			<RouteWrapper exact path='/' component={Home} />
			<RouteWrapper exact path='/about' component={About} />
			<RouteWrapper
				exact
				path={['/products/:category/:subcategory', '/products/:category']}
				component={validatedRoute(validatorProducts)(Products)}
			/>
			<RouteWrapper component={NotFound} />
		</Switch>
	)
}

const RouteWrapper = ({ component: Component, layout: Layout = LayoutDefault, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout {...props}>
				<Component {...props} />
			</Layout>
		)}
	/>
)

RouteWrapper.propTypes = {
	component: PropTypes.func.isRequired,
	layout: PropTypes.func
}

export default App
