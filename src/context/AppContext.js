import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<AppContext.Provider value={{ menuOpen, setMenuOpen }}>
			{children}
		</AppContext.Provider>
	)
}

AppProvider.propTypes = {
	children: PropTypes.node
}

export { AppProvider, AppContext }
