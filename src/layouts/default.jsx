import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Header from '@/components/Header/Header.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import NavbarDesktop from '@/components/NavbarDesktop/NavbarDesktop.jsx'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile.jsx'

import useViewport from '@/hooks/use-viewport.js'

const LayoutDefault = ({ children, history }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	const { width } = useViewport()
	const breakpoint = 768

	useEffect(() => {
		const unlisten = history.listen(() => {
			setMenuOpen(false)
		})

		return () => {
			unlisten()
		}
	}, [history])

	return (
		<>
			<Header menuOpen={menuOpen} toggleMenu={() => setMenuOpen((cur) => !cur)} />

			<nav>
				{width > breakpoint ? <NavbarDesktop /> : <NavbarMobile menuOpen={menuOpen} />}
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

export default withRouter(LayoutDefault)
