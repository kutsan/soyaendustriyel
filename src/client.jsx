import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

function render(Component) {
	ReactDOM.render(
		<BrowserRouter>
			<Component />
		</BrowserRouter>,
		document.getElementById('root')
	)
}

render(App)

if (module.hot) {
	module.hot.accept('./App', () => render(App))
}
