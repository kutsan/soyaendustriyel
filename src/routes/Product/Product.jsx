import React from 'react'
import PropTypes from 'prop-types'

import './Product.css'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

const Product = ({ match }) => {
	return (
		<div>
			<Breadcrumb />

			<div>{match.params.id}</div>
		</div>
	)
}

Product.propTypes = {
	match: PropTypes.object
}

export default Product
