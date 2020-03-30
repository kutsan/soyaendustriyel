import React from 'react'

// Components
import Logo from './components/Logo.jsx'
import SearchBar from './components/SearchBar.jsx'
import Communication from './components/Communication.jsx'

// Styles
import './Header.css'

const Header = () => {
	return (
		<header>
			<Logo />
			<SearchBar />
			<Communication />
		</header>
	)
}

export default Header
