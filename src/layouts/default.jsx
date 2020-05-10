import React from 'react'
import PropTypes from 'prop-types'

import Header from '@/components/Header/Header.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import NavbarDesktop from '@/components/NavbarDesktop/NavbarDesktop.jsx'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile.jsx'

import useViewport from '@/hooks/use-viewport.js'

const LayoutDefault = ({ children }) => {
	const { width } = useViewport()
	const breakpoint = 768

	return (
		<>
			<Header />

			<nav>
				{width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
			</nav>

			<main>{children}</main>

			<Footer />
		</>
	)
}

LayoutDefault.propTypes = {
	children: PropTypes.node.isRequired,
	history: PropTypes.object.isRequired
}

export default LayoutDefault
