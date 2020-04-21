import React from 'react'

import './Attribution.css'

const Attribution = () => {
	return (
		<div className='footer-attribution'>
			<a
				className='footer-attribution__link'
				target='_blank'
				rel='noopener noreferrer'
				href='https://kutsankaplan.com'
			>
				@kutsan
			</a>

			<a
				className='footer-attribution__link'
				target='_blank'
				rel='noopener noreferrer'
				href='https://github.com/ryhnnl'
			>
				@ryhnnl
			</a>
		</div>
	)
}

export default Attribution
