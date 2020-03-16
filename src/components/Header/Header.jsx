import React from 'react'

// Components
import Logo from './components/Logo.jsx'
import Headline from './components/Headline.jsx'
import SearchBar from './components/SearchBar.jsx'

// Styles
import './Header.css'

const Header = () => {
	return (
		<header>
			<Logo />
			<Headline />
			<SearchBar />
		</header>
	)
}

export default Header
