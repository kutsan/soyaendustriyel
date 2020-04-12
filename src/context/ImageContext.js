import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ImageContext = React.createContext(null)

const StateProvider = ({ children }) => {
	const [urls, setURLs] = useState({})

	const getStoredImageURL = (id) => {
		return urls[id]
	}

	const storeImageURL = ({ id, url }) => {
		setURLs((prev) => Object.assign({}, prev, { [id]: url }))
	}

	return (
		<ImageContext.Provider
			value={{
				getStoredImageURL,
				storeImageURL
			}}
		>
			{children}
		</ImageContext.Provider>
	)
}

StateProvider.propTypes = {
	children: PropTypes.node
}

export const ImageProvider = StateProvider

export default ImageContext
