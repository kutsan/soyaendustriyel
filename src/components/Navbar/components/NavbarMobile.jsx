import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './NavbarMobile.css'

import Category from './components/Category.jsx'

import data from '@/utils/data/index.js'

const NavbarMobile = ({ menuOpen }) => {
	const [expanded, setExpanded] = useState([])

	const isExpanded = (category) => expanded.indexOf(category.id) > -1

	const onClickToggle = (category) => {
		if (isExpanded(category)) {
			setExpanded(expanded.filter((x) => x !== category.id))
		} else {
			setExpanded([category.id, ...expanded])
		}
	}

	const calcMaxHeight = (catID) => {
		const subCountOfExpandedSubs = data.category
			.getSubs(catID)
			.filter(isExpanded)
			.reduce((acc, cur) => {
				return acc + data.category.getSubs(cur.id).length
			}, 0)

		return data.category.getSubs(catID).length + subCountOfExpandedSubs
	}

	return (
		<div className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}>
			{data.category.getTops().map((top) => (
				<Category
					key={top.id}
					modifier='top'
					expanded={isExpanded(top)}
					to={`/products/${top.id}`}
					onClickToggle={() => onClickToggle(top)}
					hasCategoriesUnder={data.category.hasSubs(top.id)}
					maxHeight={calcMaxHeight(top.id)}
					item={top}
				>
					{data.category.getSubs(top.id).map((sub) => (
						<Category
							key={sub.id}
							modifier='sub'
							expanded={isExpanded(sub)}
							to={`/products/${top.id}/${sub.id}`}
							onClickToggle={() => onClickToggle(sub)}
							hasCategoriesUnder={data.category.hasSubs(sub.id)}
							maxHeight={calcMaxHeight(sub.id)}
							item={sub}
						>
							{data.category.getSubs(sub.id).map((lowermost) => (
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
	menuOpen: PropTypes.bool
}

export default NavbarMobile
