import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Screens
import Home from './routes/Home'
import About from './routes/About'

// Layouts
import Layout from './layouts/default'
import PropTypes from 'prop-types'

// Styles
import './style.css'

const App = () => {
	return (
		<>
			<main>
				<Switch>
					<RouteWrapper exact path='/' component={Home} layout={Layout} />
					<RouteWrapper path='/about' component={About} layout={Layout} />
				</Switch>
			</main>
		</>
	)
}

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => (
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
	layout: PropTypes.func.isRequired
}

export default App
