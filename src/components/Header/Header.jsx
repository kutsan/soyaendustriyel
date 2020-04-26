import React, { useContext } from 'react'

import './Header.css'

import Logo from './components/Logo.jsx'
import SearchBar from '@/components/SearchBar/SearchBar.jsx'
import Communication from './components/Communication.jsx'

import { AppContext } from '@/context/AppContext.js'

const Header = () => {
	const { menuOpen } = useContext(AppContext)
	return (
		<header>
			<Logo />
			<SearchBar hidden={menuOpen} />
			<Communication />
		</header>
	)
}

export default Header
