import React, { useState, useEffect } from 'react'
import emitter from '../../utils/emitter.js'

// Components
import Logo from './components/Logo.jsx'
import SearchBar from './components/SearchBar.jsx'
import Communication from './components/Communication.jsx'
import MenuButton from './components/MenuButton.jsx'

// Styles
import './Header.css'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const toggle = () => setMenuOpen((prev) => !prev)
		emitter.on('ui-toggle-menu', toggle)

		return () => emitter.off('ui-toggle-menu', toggle)
	}, [menuOpen])

	return (
		<header>
			<MenuButton open={menuOpen} onClick={() => emitter.emit('ui-toggle-menu')} />
			<Logo />
			<SearchBar hidden={menuOpen} />
			<Communication />
		</header>
	)
}

export default Header
