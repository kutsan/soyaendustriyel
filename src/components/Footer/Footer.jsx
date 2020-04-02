import React from 'react'

import './Footer.css'

import About from './components/About.jsx'
import Touch from './components/Touch.jsx'
import Year from './components/Year.jsx'

const Footer = () => {
	return (
		<footer>
			<div className="footer-responsive-container">
				<About />
				<Touch />
			</div>

			<Year />
		</footer>
	)
}

export default Footer
