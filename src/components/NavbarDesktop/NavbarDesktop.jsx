import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './NavbarDesktop.css'

import data from '@/utils/data/index.js'

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

const NavbarDesktop = () => {
	return (
		<div className='navbar-desktop-container'>
			<div className='navbar-menu'>
				{data.category.getTops().map((top) => (
					<div key={top.id} className='navbar-menu__item'>
						<NavbarLink to={`/products/${top.id}`} name={top.name} modifier='top' />

						<div className='navbar-menu__submenu'>
							{data.category.getSubs(top.id).map((sub) => (
								<div
									key={sub.id}
									className='navbar-menu__item navbar-menu__item--sub'
								>
									<NavbarLink
										to={`/products/${top.id}/${sub.id}`}
										name={sub.name}
										modifier='sub'
									/>
									<div className='navbar-menu__lowermostmenu'>
										{data.category.getSubs(sub.id).map((lowermost) => (
											<div
												key={lowermost.id}
												className='navbar-menu__item navbar-menu__item--lowermost'
											>
												<NavbarLink
													to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
													name={lowermost.name}
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
		</div>
	)
}

export default NavbarDesktop
