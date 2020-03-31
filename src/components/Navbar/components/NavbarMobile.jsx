import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import emitter from '../../../utils/emitter'

// Styles
import './NavbarMobile.css'

import Category from './components/Category.jsx'

const NavbarMobile = ({ getTopCategories, getCategoriesUnder, hasCategoriesUnder }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [expanded, setExpanded] = useState([])

	useEffect(() => {
		const toggle = () => setMenuOpen((prev) => !prev)
		emitter.on('ui-toggle-menu', toggle)

		return () => emitter.off('ui-toggle-menu', toggle)
	}, [menuOpen])

	const isExpanded = (category) => expanded.indexOf(category.id) > -1

	const onClickLink = () => emitter.emit('ui-toggle-menu')
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
					onClickLink={onClickLink}
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
							onClickLink={onClickLink}
							hasCategoriesUnder={hasCategoriesUnder(sub)}
							maxHeight={calcMaxHeight(sub)}
							item={sub}
						>
							{getCategoriesUnder(sub).map((lowermost) => (
								<Category
									key={lowermost.id}
									modifier='lowermost'
									to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
									onClickLink={onClickLink}
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
	hasCategoriesUnder: PropTypes.func.isRequired
}

export default NavbarMobile
