import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import ScrollToTop from '@/utils/scroll/scroll-to-top.js'

function render(Component) {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Fragment>
					<ScrollToTop />
					<Component />
				</Fragment>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	)
}

render(App)

if (module.hot) {
	module.hot.accept('./App', () => render(App))
}
