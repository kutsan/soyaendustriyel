import React from 'react'

import './Footer.css'

import LeafIcon from '@/assets/icons/leaf.svg'

const Footer = () => {
	return (
		<footer>
			<span>done with love by reyhan & kutsan in 2020</span>

			<div className='footer-year'>
				<div className='footer-year__year'>2020</div>
				<LeafIcon className='footer__leaf-icon' />
			</div>
		</footer>
	)
}

export default Footer
