import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Breadcrumb.css'

import { categories } from '@/data/categories.json'

const Breadcrumb = ({ buildFrom }) => {
	return (
		<div className='breadcrumb'>
			{buildBreadcrumb(buildFrom).map((e, index) => (
				<div key={index} className='breadcrumb__step'>
					{e.to ? (
						<Link className='breadcrumb__step-link' to={e.to}>
							{e.name}
						</Link>
					) : (
						<span className='breadcrumb__step-current'>{e.name}</span>
					)}
				</div>
			))}
		</div>
	)
}

Breadcrumb.propTypes = {
	buildFrom: PropTypes.object.isRequired
}

export default Breadcrumb

const buildBreadcrumb = (data) => {
	const getCategoryName = (catId) => categories.find((e) => e.id === catId).name
	const getParent = (catId) => categories.find((e) => e.id === catId).parent || false
	const getURL = (catId) =>
		getParent(catId) ? `${getURL(getParent(catId))}/${catId}` : `/products/${catId}`

	const steps = []

	steps.unshift({
		to: false,
		name: data.name
	})

	const buildSteps = (catId) => {
		if (!catId) return false

		steps.unshift({
			to: getURL(catId),
			name: getCategoryName(catId)
		})

		const parent = getParent(catId)
		parent && buildSteps(parent)
	}

	buildSteps(data.category || data.parent)

	steps.unshift({
		to: '/',
		name: 'Ana Sayfa'
	})

	return steps
}
