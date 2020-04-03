import React from 'react'

import './Copyright.css'

import LeafIcon from '@/assets/icons/leaf.svg'

const Copyright = () => {
	return (
		<div className='footer-copyright'>
			<div className='footer-copyright__year'>2020</div>
			<LeafIcon className='footer-copyright__leaf-icon' />
		</div>
	)
}

export default Copyright
