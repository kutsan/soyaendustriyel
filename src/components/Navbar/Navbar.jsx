import React from 'react'

import NavbarMobile from './components/NavbarMobile.jsx'
import NavbarWeb from './components/NavbarWeb.jsx'

const Navbar = () => {
	return (
		<nav>
			<NavbarMobile />
			<NavbarWeb />
		</nav>
	)
}

export default Navbar
