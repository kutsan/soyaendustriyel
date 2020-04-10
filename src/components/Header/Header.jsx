import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'

import Logo from './components/Logo.jsx'
import SearchBar from './components/SearchBar.jsx'
import Communication from './components/Communication.jsx'
import MenuButton from './components/MenuButton.jsx'

const Header = ({ menuOpen, toggleMenu }) => {
	return (
		<header>
			<MenuButton open={menuOpen} onClick={toggleMenu} />
			<Logo />
			<SearchBar hidden={menuOpen} />
			<Communication />
		</header>
	)
}

Header.propTypes = {
	menuOpen: PropTypes.bool,
	toggleMenu: PropTypes.func
}

export default Header
