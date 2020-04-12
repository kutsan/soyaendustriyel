import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import './Image.css'

import ImageContext from '@/context/ImageContext.js'

import storage from '@/utils/firebase/storage.js'

const Image = ({ id }) => {
	const [image, setImage] = useState(null)
	const [loading, setLoading] = useState(false)

	const { getStoredImageURL, storeImageURL } = useContext(ImageContext)

	useEffect(() => {
		let ignore = false

		const url = getStoredImageURL(id)

		if (url && !ignore) {
			setImage(url)

			return () => {
				ignore = true
			}
		}

		setLoading(true)

		storage
			.child(`${id}.jpg`)
			.getDownloadURL()
			.then((url) => {
				if (!ignore) {
					storeImageURL({ id, url })
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
	}, [id])

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
	id: PropTypes.string
}

export default Image
