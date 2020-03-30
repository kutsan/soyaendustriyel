import React, { useState } from 'react'
import emitter from '../../utils/emitter.js'

// Components
import Logo from './components/Logo.jsx'
import SearchBar from './components/SearchBar.jsx'
import Communication from './components/Communication.jsx'
import MenuButton from './components/MenuButton.jsx'

// Styles
import './Header.css'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			menuOpen: false
		}

		this.toggle = this.toggle.bind(this)
	}

	componentDidMount() {
		emitter.on('ui-toggle-menu', this.toggle)
	}

	componentWillUnmount() {
		emitter.off('ui-toggle-menu', this.toggle)
	}

	toggle() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	emitToggle() {
		emitter.emit('ui-toggle-menu')
	}

	render() {
		const { menuOpen } = this.state

		return (
			<header>
				<MenuButton open={menuOpen} onClick={this.emitToggle} />
				<Logo />
				<SearchBar hidden={menuOpen} />
				<Communication />
			</header>
		)
	}
}

export default Header
