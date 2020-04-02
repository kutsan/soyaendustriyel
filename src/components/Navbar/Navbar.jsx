import React from 'react'

import NavbarMobile from './components/NavbarMobile.jsx'
import NavbarWeb from './components/NavbarWeb.jsx'

import { categories } from '@/data/categories.json'

const Navbar = () => {
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
			/>
			<NavbarWeb
				getCategoriesUnder={getCategoriesUnder}
				getTopCategories={getTopCategories}
			/>
		</nav>
	)
}

export default Navbar
