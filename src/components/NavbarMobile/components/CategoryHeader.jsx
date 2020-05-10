import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './CategoryHeader.css'

const CategoryHeader = ({
	modifier,
	item,
	to,
	onClickToggle,
	expanded,
	hasCategoriesUnder
}) => {
	return (
		<div
			className={`navbar-mobile__category-header navbar-mobile__category-header--${modifier}`}
		>
			<NavLink
				to={to}
				isActive={(_, location) => location.pathname === to}
				activeClassName='navbar-mobile__category-link--active'
				className={`navbar-mobile__category-link navbar-mobile__category-link--${modifier} ${
					expanded ? 'navbar-mobile__category-link--expanded' : ''
				}`}
			>
				{item.name}
			</NavLink>

			{hasCategoriesUnder && (
				<button
					onClick={onClickToggle}
					key={item.id}
					className={`navbar-mobile__category-toggle navbar-mobile__category-toggle--${modifier} ${
						expanded
							? 'navbar-mobile__category-toggle--expanded'
							: ''
					}`}
				>
					<span />
				</button>
			)}
		</div>
	)
}

CategoryHeader.propTypes = {
	modifier: PropTypes.string.isRequired,
	hasCategoriesUnder: PropTypes.bool.isRequired,
	item: PropTypes.object.isRequired,
	to: PropTypes.string.isRequired,
	expanded: PropTypes.bool,
	onClickToggle: PropTypes.func
}

export default CategoryHeader
