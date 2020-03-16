import React from 'react'

import SvgLogo from './Logo.svg'
import './Logo.css'

const Logo = () => {
	return <i className='logo' dangerouslySetInnerHTML={{ __html: SvgLogo }} />
}

export default Logo
