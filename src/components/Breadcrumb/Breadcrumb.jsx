import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Breadcrumb.css'

const Breadcrumb = ({ steps }) => {
	return (
		<div className='breadcrumb'>
			{steps.map((e, index) => (
				<div key={index} className='breadcrumb__step'>
					{e.to ? (
						<Link className='breadcrumb__step-link' to={e.to}>
							{e.name}
						</Link>
					) : (
						<span>{e.name}</span>
					)}
				</div>
			))}
		</div>
	)
}

Breadcrumb.propTypes = {
	steps: PropTypes.array.isRequired
}

export default Breadcrumb
