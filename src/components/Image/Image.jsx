import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { lazyload } from 'react-lazyload'

import './Image.css'

const ImageContainer = ({ children }) => (
	<div className='image-container'>
		<div className='image-wrapper'>{children}</div>
	</div>
)

ImageContainer.propTypes = {
	children: PropTypes.node.isRequired
}

const Image = ({ id }) => {
	const imgEl = useRef(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (!imgEl.current.complete) {
			setLoading(true)
		}
	}, [imgEl])

	return (
		<ImageContainer>
			{loading && <div className='image-spinner' />}

			<picture>
				<source srcSet={`/${id}.webp`} type='image/webp' />
				<img
					ref={imgEl}
					alt='Ürün resmi'
					className={`image ${loading ? '' : 'image--loaded'}`}
					src={`/${id}.jpg`}
					onLoad={() => setLoading(false)}
				/>
			</picture>
		</ImageContainer>
	)
}

Image.propTypes = {
	id: PropTypes.string
}

const Placeholder = () => (
	<ImageContainer>
		<div className='image'></div>
	</ImageContainer>
)

export default lazyload({
	once: true,
	offset: 0,
	placeholder: <Placeholder />
})(Image)
