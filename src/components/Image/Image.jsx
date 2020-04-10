import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './Image.css'

import storage from '@/utils/firebase/storage.js'

const Image = ({ name }) => {
	const [image, setImage] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		let ignore = false

		setLoading(true)

		storage
			.child(name)
			.getDownloadURL()
			.then((url) => {
				if (!ignore) {
					setImage(url)
				}
			})
			.catch((err) => {
				if (!ignore) {
					console.error(err)
				}
			})
			.finally(() => {
				if (!ignore) {
					setLoading(false)
				}
			})

		return () => {
			ignore = true
		}
	}, [name])

	return (
		<div className='image-container'>
			<div
				style={image && { backgroundImage: `url(${image})` }}
				className={`image ${loading ? 'image--loading' : ''} ${
					!loading && !image ? 'image--no-image' : ''
				}`}
			></div>
		</div>
	)
}

Image.propTypes = {
	name: PropTypes.string
}

export default Image
