import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '@/assets/icons/logo.svg'
import './Logo.css'

import emitter from '@/utils/emitter'

const Logo = () => {
	return (
		<Link to='/' onClick={() => emitter.emit('ui-toggle-menu')}>
			<LogoIcon className='logo' />
		</Link>
	)
}

export default Logo
