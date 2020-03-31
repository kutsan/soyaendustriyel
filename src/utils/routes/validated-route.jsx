import React from 'react'
import PropTypes from 'prop-types'

import NotFound from '../../components/NotFound/NotFound.jsx'

const ValidatedRoute = (validator) => {
	return function(ComposedComponent) {
		const ValidatedComponent = (props) => {
			if (!validator(props.match.params)) {
				return <NotFound {...props} />
			}

			return <ComposedComponent {...props} />
		}

		ValidatedComponent.propTypes = {
			match: PropTypes.object.isRequired
		}

		return ValidatedComponent
	}
}

export default ValidatedRoute
