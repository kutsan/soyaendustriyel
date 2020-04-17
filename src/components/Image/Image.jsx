import React from 'react'
import PropTypes from 'prop-types'
import { lazyload } from 'react-lazyload'

import './Image.css'

import data from '@/utils/data/index.js'

// HELP
// @see https://github.com/Canner/react-loading-image/blob/master/src/index.js

const Placeholder = () => (
	<div className='image-container'>
		<div className='image-wrapper'>
			<div className='image'></div>
		</div>
	</div>
)

const Image = ({ id }) => {
	return (
		<div className='image-container'>
			<div className='image-wrapper'>
				<picture>
					<source srcSet={`/${id}.webp`} type='image/webp' />
					<img
						alt={data.product.getRef(id).name}
						className={`image`}
						src={`/${id}.jpg`}
					/>
				</picture>
			</div>
		</div>
	)
}

Image.propTypes = {
	id: PropTypes.string
}

export default lazyload({
	once: true,
	offset: -200,
	placeholder: <Placeholder />
})(Image)
