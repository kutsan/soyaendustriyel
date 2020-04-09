import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '@/assets/icons/logo.svg'
import './Logo.css'

const Logo = () => {
	return (
		<Link to='/' aria-label='Ana Sayfa'>
			<LogoIcon className='logo' />
		</Link>
	)
}

export default Logo
