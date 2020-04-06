import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

// Styles
import './App.css'

// Routes
import Home from './routes/Home/Home.jsx'
import Products from './routes/Products/Products.jsx'
import Product from './routes/Product/Product.jsx'
import NavbarMobile from './routes/NavbarMobile/NavbarMobile.jsx'
import NotFound from './routes/NotFound/NotFound.jsx'

// Layouts
import LayoutDefault from './layouts/default.jsx'
import LayoutFullscreen from './layouts/fullscreen.jsx'

// Utils
import validatedRoute from './utils/routes/validated-route.jsx'
import validatorProducts from './utils/routes/validator-products.js'
import validatorProduct from './utils/routes/validator-product.js'

const App = () => {
	return (
		<Switch>
			<RouteWrapper exact path='/' component={Home} />
			<RouteWrapper
				exact
				path={['/products/:category/:subcategory', '/products/:category']}
				component={validatedRoute(validatorProducts)(Products)}
			/>
			<RouteWrapper
				exact
				path='/product/:id'
				component={validatedRoute(validatorProduct)(Product)}
			/>
			<RouteWrapper
				layout={LayoutFullscreen}
				exact
				path='/navbar-mobile'
				component={NavbarMobile}
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
