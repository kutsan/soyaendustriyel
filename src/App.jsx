import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router-dom'

import './App.css'

import { ViewportProvider } from './context/ViewportContext.js'
import { AppProvider } from './context/AppContext.js'

import Home from './routes/Home/Home.jsx'
import Products from './routes/Products/Products.jsx'
import Product from './routes/Product/Product.jsx'
import Search from './routes/Search/Search.jsx'
import NotFound from './routes/NotFound/NotFound.jsx'

import LayoutDefault from './layouts/default.jsx'

import validatedRoute from './utils/routes/validated-route.jsx'
import validatorProducts from './utils/routes/validator-products.js'
import validatorProduct from './utils/routes/validator-product.js'
import validatorSearch from './utils/routes/validator-search.js'

const App = ({ history }) => {
	useEffect(() => {
		// Scroll to top for every route navigation.
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0)
		})

		return () => {
			unlisten()
		}
	}, [history])

	return (
		<AppProvider>
			<ViewportProvider>
				<Switch>
					<RouteWrapper exact path='/' component={Home} />
					<RouteWrapper
						exact
						path={[
							'/products/:category/:subcategory/:lowermostcategory',
							'/products/:category/:subcategory',
							'/products/:category'
						]}
						component={validatedRoute(validatorProducts)(Products)}
					/>
					<RouteWrapper
						exact
						path='/product/:id'
						component={validatedRoute(validatorProduct)(Product)}
					/>
					<RouteWrapper
						exact
						path='/search'
						component={validatedRoute(validatorSearch)(Search)}
					/>

					<RouteWrapper component={NotFound} />
				</Switch>
			</ViewportProvider>
		</AppProvider>
	)
}

App.propTypes = {
	history: PropTypes.object
}

const RouteWrapper = ({
	component: Component,
	layout: Layout = LayoutDefault,
	...rest
}) => (
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

export default withRouter(App)
