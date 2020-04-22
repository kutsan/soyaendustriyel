import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Header from '@/components/Header/Header.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import NavbarDesktop from '@/components/NavbarDesktop/NavbarDesktop.jsx'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile.jsx'

const LayoutDefault = ({ children, history }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const unlisten = history.listen(() => {
			setMenuOpen(false)
		})

		return () => {
			unlisten()
		}
	}, [])

	return (
		<>
			<Header menuOpen={menuOpen} toggleMenu={() => setMenuOpen((cur) => !cur)} />

			<nav>
				{window.innerWidth > 768 ? <NavbarDesktop /> : <NavbarMobile menuOpen={menuOpen} />}
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
