import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '@/components/Header/Header.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import Navbar from '@/components/Navbar/Navbar.jsx'

const LayoutDefault = ({ children }) => {
	return (
		<>
			<Header />
			<Navbar />

			<main>{children}</main>

			<Footer />
		</>
	)
}

LayoutDefault.propTypes = {
	children: PropTypes.node.isRequired
}

export default LayoutDefault
