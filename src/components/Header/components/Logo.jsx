import React from 'react'
import { Link } from 'react-router-dom'

import SvgLogo from './Logo.svg'
import './Logo.css'

const Logo = () => {
	return (
		<Link to='/'>
			<i className='logo' dangerouslySetInnerHTML={{ __html: SvgLogo }} />
		</Link>
	)
}

export default Logo
