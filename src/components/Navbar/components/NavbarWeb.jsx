import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './NavbarWeb.css'

const NavbarWeb = ({ getTopCategories, getCategoriesUnder }) => {
	return (
		<div className='navbar-menu'>
			{getTopCategories().map((x) => (
				<div key={x.id} className='navbar-menu--item'>
					<Link to={`/products/${x.id}`}>{x.name}</Link>

					<div className='navbar-menu--submenu'>
						{getCategoriesUnder(x).map((y) => (
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

NavbarWeb.propTypes = {
	getTopCategories: PropTypes.func,
	getCategoriesUnder: PropTypes.func
}

export default NavbarWeb
