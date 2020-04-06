import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './NavbarWeb.css'

const NavbarLink = ({ to, name, modifier }) => (
	<Link
		to={to}
		className={`navbar-menu__item-link ${
			modifier ? `navbar-menu__item-link--${modifier}` : ''
		}`}
	>
		{name}
	</Link>
)

NavbarLink.propTypes = {
	to: PropTypes.string,
	name: PropTypes.string,
	modifier: PropTypes.string
}

const NavbarWeb = ({ getTopCategories, getCategoriesUnder }) => {
	return (
		<div className='navbar-menu'>
			{getTopCategories().map((x) => (
				<div key={x.id} className='navbar-menu__item'>
					<NavbarLink to={`/products/${x.id}`} name={x.name} modifier='top' />

					<div className='navbar-menu__submenu'>
						{getCategoriesUnder(x).map((y) => (
							<div key={y.id} className='navbar-menu__item navbar-menu__item--sub'>
								<NavbarLink
									to={`/products/${x.id}/${y.id}`}
									name={y.name}
									modifier='sub'
								/>
								<div className='navbar-menu__lowermostmenu'>
									{getCategoriesUnder(y).map((z) => (
										<div
											key={z.id}
											className='navbar-menu__item navbar-menu__item--lowermost'
										>
											<NavbarLink
												to={`/products/${x.id}/${y.id}/${z.id}`}
												name={z.name}
												modifier='lowermost'
											/>
										</div>
									))}
								</div>
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
