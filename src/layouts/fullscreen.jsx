import React from 'react'
import PropTypes from 'prop-types'

// Components
import Footer from '@/components/Footer/Footer.jsx'

const LayoutFullscreen = ({ children }) => {
	return (
		<>
			{children}

			<Footer />
		</>
	)
}

LayoutFullscreen.propTypes = {
	children: PropTypes.node.isRequired
}

export default LayoutFullscreen
