import React from 'react'
import { Link } from 'react-router-dom'

import SvgLogo from './Logo.svg'
import './Logo.css'

import emitter from '../../../utils/emitter'

const Logo = () => {
	return (
		<Link to='/' onClick={() => emitter.emit('ui-toggle-menu')}>
			<i className='logo' dangerouslySetInnerHTML={{ __html: SvgLogo }} />
		</Link>
	)
}

export default Logo
