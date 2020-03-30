import React from 'react'

import './Communication.css'

import PhoneIcon from './PhoneIcon.svg'
import EmailIcon from './EmailIcon.svg'

const Communication = () => {
	return (
		<div className='communication'>
			<a href='tel:+902362335054' className='phone'>
				<div className='phone__icon' dangerouslySetInnerHTML={{ __html: PhoneIcon }} />
				<div className='phone__number'>+90 236 233 50 54</div>
			</a>
			<a href='mailto:info@soyaendustriyel.com' className='email'>
				<i className='email__icon' dangerouslySetInnerHTML={{ __html: EmailIcon }} />
				<div className='email__address'>info@soyaendustriyel.com</div>
			</a>
		</div>
	)
}

export default Communication
