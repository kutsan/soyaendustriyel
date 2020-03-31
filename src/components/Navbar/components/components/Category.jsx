import React from 'react'
import PropTypes from 'prop-types'

import './Category.css'

import CategoryHeader from './CategoryHeader.jsx'

const Category = ({
	modifier,
	item,
	to,
	onClickLink,
	onClickToggle,
	expanded,
	hasCategoriesUnder,
	children,
	maxHeight
}) => {
	return (
		<div
			className={`navbar-mobile__category navbar-mobile__category--${modifier} ${
				expanded ? 'navbar-mobile__category--expanded' : ''
			}`}
		>
			<CategoryHeader
				modifier={modifier}
				item={item}
				to={to}
				onClickLink={onClickLink}
				onClickToggle={onClickToggle}
				expanded={expanded}
				hasCategoriesUnder={hasCategoriesUnder}
			/>

			{hasCategoriesUnder && (
				<div
					className={`navbar-mobile__category-children navbar-mobile__category-children--${modifier}`}
					style={expanded ? { maxHeight: `calc(3.5rem * ${maxHeight})` } : {}}
				>
					{children}
				</div>
			)}
		</div>
	)
}

Category.propTypes = {
	modifier: PropTypes.string.isRequired,
	item: PropTypes.object.isRequired,
	to: PropTypes.string.isRequired,
	onClickLink: PropTypes.func.isRequired,
	hasCategoriesUnder: PropTypes.bool.isRequired,
	expanded: PropTypes.bool,
	onClickToggle: PropTypes.func,
	maxHeight: PropTypes.number,
	children: PropTypes.node
}

export default Category
