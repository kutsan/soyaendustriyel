import React from 'react'

import './Footer.css'

import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Copyright from './components/Copyright.jsx'

const Footer = () => {
	return (
		<footer>
			<div className='footer-content'>
				<About />
				<Contact />
			</div>

			<Copyright />
		</footer>
	)
}

export default Footer
