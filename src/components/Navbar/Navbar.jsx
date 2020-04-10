import React from 'react'
import PropTypes from 'prop-types'

import './Navbar.css'

import NavbarMobile from './components/NavbarMobile.jsx'
import NavbarWeb from './components/NavbarWeb.jsx'

const Navbar = ({ menuOpen }) => {
	return (
		<nav>
			<NavbarMobile menuOpen={menuOpen} />
			<NavbarWeb />
		</nav>
	)
}

Navbar.propTypes = {
	menuOpen: PropTypes.bool
}

export default Navbar
