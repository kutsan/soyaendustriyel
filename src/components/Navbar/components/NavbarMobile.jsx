import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Styles
import './NavbarMobile.css'

import Category from './components/Category.jsx'

const NavbarMobile = ({ getTopCategories, getCategoriesUnder, hasCategoriesUnder, menuOpen }) => {
	const [expanded, setExpanded] = useState([])

	const isExpanded = (category) => expanded.indexOf(category.id) > -1

	const onClickToggle = (category) => {
		if (isExpanded(category)) {
			setExpanded(expanded.filter((x) => x !== category.id))
		} else {
			setExpanded([category.id, ...expanded])
		}
	}

	const calcMaxHeight = (category) => {
		const subCountOfExpandedSubs = getCategoriesUnder(category)
			.filter(isExpanded)
			.reduce((acc, cur) => {
				return acc + getCategoriesUnder(cur).length
			}, 0)

		return getCategoriesUnder(category).length + subCountOfExpandedSubs
	}

	return (
		<div className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}>
			{getTopCategories().map((top) => (
				<Category
					key={top.id}
					modifier='top'
					expanded={isExpanded(top)}
					to={`/products/${top.id}`}
					onClickToggle={() => onClickToggle(top)}
					hasCategoriesUnder={hasCategoriesUnder(top)}
					maxHeight={calcMaxHeight(top)}
					item={top}
				>
					{getCategoriesUnder(top).map((sub) => (
						<Category
							key={sub.id}
							modifier='sub'
							expanded={isExpanded(sub)}
							to={`/products/${top.id}/${sub.id}`}
							onClickToggle={() => onClickToggle(sub)}
							hasCategoriesUnder={hasCategoriesUnder(sub)}
							maxHeight={calcMaxHeight(sub)}
							item={sub}
						>
							{getCategoriesUnder(sub).map((lowermost) => (
								<Category
									key={lowermost.id}
									modifier='lowermost'
									to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
									hasCategoriesUnder={false}
									item={lowermost}
								/>
							))}
						</Category>
					))}
				</Category>
			))}
		</div>
	)
}

NavbarMobile.propTypes = {
	getTopCategories: PropTypes.func.isRequired,
	getCategoriesUnder: PropTypes.func.isRequired,
	hasCategoriesUnder: PropTypes.func.isRequired,
	menuOpen: PropTypes.bool
}

export default NavbarMobile
