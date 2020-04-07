import React from 'react'
import PropTypes from 'prop-types'

import './Navbar.css'

import NavbarMobile from './components/NavbarMobile.jsx'
import NavbarWeb from './components/NavbarWeb.jsx'

import { categories } from '@/data/categories.json'

const Navbar = ({ menuOpen }) => {
	const getCategoriesUnder = (category) => categories.filter((x) => x.parent === category.id)
	const getTopCategories = () => categories.filter((x) => !x.parent)
	const hasCategoriesUnder = (category) =>
		Boolean(categories.find((x) => x.parent === category.id))

	return (
		<nav>
			<NavbarMobile
				getCategoriesUnder={getCategoriesUnder}
				getTopCategories={getTopCategories}
				hasCategoriesUnder={hasCategoriesUnder}
				menuOpen={menuOpen}
			/>
			<NavbarWeb
				getCategoriesUnder={getCategoriesUnder}
				getTopCategories={getTopCategories}
			/>
		</nav>
	)
}

Navbar.propTypes = {
	menuOpen: PropTypes.bool
}

export default Navbar
