import React from 'react'
import { Link } from 'react-router-dom'

import NavbarMobile from './NavbarMobile.jsx'

// Styles
import './Navbar.css'

// Data
import { categories } from '../../data/categories.json'

const getSubCategories = (category) => {
	return categories.filter((x) => x.parent === category.id)
}

const mainCategories = categories.filter((x) => !x.parent)

const Navbar = () => {
	return (
		<nav>
			<NavbarMobile />
			<div className='navbar-menu'>
				{mainCategories.map((x) => (
					<div key={x.id} className='navbar-menu--item'>
						<Link to={`/products/${x.id}`}>{x.name}</Link>
						<div className='navbar-menu--submenu'>
							{getSubCategories(x).map((y) => (
								<div key={y.id} className='navbar-menu--item'>
									<Link to={`/products/${x.id}/${y.id}`}>{y.name}</Link>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</nav>
	)
}

export default Navbar
