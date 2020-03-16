import React from 'react'
import { Link } from 'react-router-dom'

// Components
import MobileNavbar from './components/MobileNavbar.jsx'

// Styles
import './Navbar.css'

// Data
import { items } from './navbar-data.json'

const Navbar = () => {
	return (
		<nav>
			<MobileNavbar />

			<ul className='navbar-menu'>
				{items.map((x, i) => (
					<li key={i} className='navbar-menu-item'>
						<Link to={x.to}>{x.name}</Link>
						<ul className='navbar-menu-item-submenu'>
							{x.items.map((y, j) => (
								<li key={`${i}-${j}`} className='navbar-menu-item-submenu-item'>
									<Link to={y.to}>{y.name}</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
