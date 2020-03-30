import React from 'react'
import { Link } from 'react-router-dom'

import './NavbarWeb.css'

import { categories } from '../../../data/categories.json'

const NavbarWeb = () => {
	const getSubCategories = (category) => categories.filter((x) => x.parent === category.id)
	const getMainCategories = categories.filter((x) => !x.parent)

	return (
		<div className='navbar-menu'>
			{getMainCategories.map((x) => (
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
	)
}

export default NavbarWeb
